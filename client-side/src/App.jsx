import "./App.css";
import { useState } from "react";
import axios from "axios";
import Loading from "./components/loading";
// import Footer from "./components/footer";
import mockUp from "/image.png";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState({ src: "", title: "", file: "" });
  const [error, setError] = useState("");

  const openModal = () => {
    setModalOpen(true);
    setLoading(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl("");
    setVideoInfo({ src: "", title: "", file: "" });
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDownload = async (event) => {
    event.preventDefault();
    openModal();
    try {
      const response = await axios.get(
        `http://0.0.0.0:8000/download/?url=${encodeURIComponent(videoUrl)}`
      );
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");
      const downloadLink = doc.querySelector("a").href;
      const videoTitle = doc.querySelector("h1").textContent;

      // Ensure the correct base URL is used for downloading
      const backendUrl = downloadLink.replace(
        "localhost:5173",
        "localhost:8000"
      );
      // const backendUrl = downloadLink;

      setVideoInfo({
        src: `https://img.youtube.com/vi/${extractVideoId(videoUrl)}/0.jpg`,
        title: videoTitle,
        file: backendUrl,
      });
    } catch (err) {
      setError(
        "Error downloading video: " +
          (err.response?.data?.detail || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddToDevice = async () => {
    try {
      const response = await axios.get(videoInfo.file, {
        responseType: "blob", // Ensure we're getting a blob response
      });

      // Log the response to check its status and data
      console.log(response);

      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        const fileName = decodeURIComponent(videoInfo.file.split("/").pop()); // Get the correct filename

        link.href = url;
        link.setAttribute("download", fileName); // Set the filename for download
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error("Failed to download the video file.");
      }
    } catch (error) {
      console.error("Error saving video:", error);
    }
  };

  const extractVideoId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  return (
    <>
      <div className="box bg-gray-200 p-4 m-16 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="grid grid-cols-1 gap-6 place-items-center">
          <img className="w-16 h-16" src="../youtube.svg" alt="" />
          <p className="text-4xl text-black text-center font-bold">
            YouTube Video Downloader
          </p>
          <p className="text-md pb-6 text-black text-center">
            Paste the YouTube video URL and instantly download videos for
            offline viewing.
          </p>
        </div>
        <form className="flex items-center flex-col" onSubmit={handleDownload}>
          <label className="block mb-6">
            <input
              type="text"
              placeholder="Paste your video link here"
              value={videoUrl}
              onChange={handleInputChange}
              className="neumorphic-input w-96 p-4 placeholder:pl-6 text-black bg-gray-200 rounded-lg shadow-lg focus:outline-none focus:ring-gray-300"
            />
          </label>
          <button
            type="submit"
            className="neumorphic-button font-bold w-32 p-4 bg-red-500 text-gray-100 rounded-lg shadow-lg shadow-red-300 focus:outline-none hover:border-0 focus:ring-gray-300"
          >
            Download
          </button>
        </form>
      </div>
      {/* <Footer /> */}
      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md bg-white/30 flex justify-center items-center">
          <div className=" ">
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <img
                      src={videoInfo.src || mockUp}
                      alt="Video Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {videoInfo.title || " Video not found!!!"}
                    </h5>
                  </div>
                  <div className="p-6 pt-0 flex justify-evenly">
                    <button
                      className="neumorphic-button bg-green-600 text-gray-100 px-4 py-2 rounded-lg shadow-lg shadow-green-300 focus:outline-none hover:border-0 focus:ring-gray-300 flex flex-row gap-1 justify-center items-center"
                      onClick={handleAddToDevice}
                    >
                      <img src="../download.svg" alt="" />
                      <p>Save to Device</p>
                    </button>
                    <button
                      className="neumorphic-button bg-red-500 text-gray-100 px-4 py-2 rounded-lg shadow-lg shadow-red-300 focus:outline-none hover:border-0 focus:ring-gray-300 flex flex-row gap-1 justify-center items-center"
                      onClick={closeModal}
                    >
                      <img src="../close.svg" alt="" />
                      <p>Close</p>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
