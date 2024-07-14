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
    }, 2000); // Simulate loading time of 2 seconds
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
          <div className=" ">
            {loading ? (
              <div className="flex space-x-2 justify-center items-center ">
                <span className="sr-only">Loading...</span>
                <div className="neomorphic-dot shadow-inner bg-red-500 h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="neomorphic-dot shadow-inner bg-red-500 h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="neomorphic-dot shadow-inner bg-red-500 h-8 w-8 rounded-full animate-bounce"></div>
              </div>
            ) : (
              <>
                <div className="relative flex w-80 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <div className="relative h-0 pb-9/16">
                      <iframe
                        title="Video"
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoUrl}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Video Title
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      Video Description
                    </p>
                  </div>
                  <div className="p-6 pt-0 flex justify-evenly">
                    <button
                      className="neumorphic-button mt-4 bg-green-600 text-gray-100 px-4 py-2 rounded-lg shadow-lg shadow-green-300 focus:outline-none hover:border-0 focus:ring-gray-300 flex flex-row gap-1 justify-center items-center"
                      onClick={closeModal}
                    >
                      <svg
                        height="15px"
                        version="1.1"
                        viewBox="0 0 14 19"
                        width="14px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title />
                        <desc />
                        <defs />
                        <g fill="none" id="Page-1" stroke="none">
                          <g
                            fill="white"
                            id="Core"
                            transform="translate(-383.000000, -213.000000)"
                          >
                            <g
                              id="file-download"
                              transform="translate(383.000000, 213.500000)"
                            >
                              <path
                                d="M14,6 L10,6 L10,0 L4,0 L4,6 L0,6 L7,13 L14,6 L14,6 Z M0,15 L0,17 L14,17 L14,15 L0,15 L0,15 Z"
                                id="Shape"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p>Save to Device</p>
                    </button>
                    <button
                      className="neumorphic-button mt-4 bg-red-500 text-gray-100 px-4 py-2 rounded-lg shadow-lg shadow-red-300 focus:outline-none hover:border-0 focus:ring-gray-300 flex flex-row"
                      onClick={closeModal}
                    >
                      <p className="pr-1">X</p>
                      <p>Close</p>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
