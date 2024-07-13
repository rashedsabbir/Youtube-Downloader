import "./App.css";

import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [videoUrl, setVideoUrl] = useState(""); // State to store video URL input
  const [loading, setLoading] = useState(false); // State to manage loading animation

  const openModal = () => {
    setModalOpen(true);
    setLoading(true); // Start loading animation
    // Simulate loading delay (you would replace this with your actual video loading logic)
    setTimeout(() => {
      setLoading(false); // Stop loading animation
    }, 10000); // Simulate loading time of 2 seconds
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl(""); // Clear video URL input when modal closes
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDownload = (event) => {
    event.preventDefault();
    openModal();
    // Here you would implement logic to fetch and prepare the video for download
  };

  return (
    <div className="box bg-gray-200 p-4 m-16 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-6 place-items-center">
        <img className="w-16 h-16" src="../public/youtube.svg" alt="" />
        <p className="text-4xl text-black text-center font-bold">
          YouTube Video Downloader
        </p>
        <p className="text-md pb-6 text-black text-center">
          Paste the YouTube video URL and instantly download videos for offline
          viewing.
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

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md bg-white/30 flex justify-center items-center">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-lg">
            {loading ? (
              <div className="flex space-x-2 justify-center items-center ">
                <span className="sr-only">Loading...</span>
                <div className="neomorphic-dot shadow-inner bg-gray-100 h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="neomorphic-dot shadow-inner bg-gray-100 h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="neomorphic-dot shadow-inner bg-gray-100 h-8 w-8 rounded-full animate-bounce"></div>
              </div>
            ) : (
              <>
                <div className="relative h-0 pb-9/16">
                  <iframe
                    title="Video"
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoUrl}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  className="neumorphic-button mt-4 bg-blue-500 text-gray-100 px-4 py-2 rounded-lg shadow-lg shadow-blue-300 focus:outline-none hover:border-0 focus:ring-gray-300"
                  onClick={closeModal}
                >
                  Add to Device
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
