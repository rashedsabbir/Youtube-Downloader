import "./App.css";

function App() {
  return (
    <div className="bg-white">
      <form className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-3xl mx-auto flex items-center flex-col">
        <div className="flex flex-col items-center">
          <img className="w-16 h-16" src="../public/youtube.svg" alt="" />
          <h1 className="text-2xl text-black text-center font-bold">
            YouTube Video Downloader
          </h1>
          <h3 className="text-sm text-black text-center font-mono">
            Paste the YouTube video URL and instantly download videos for
            offline viewing.
          </h3>
        </div>
        <label className="block mb-6">
          <input
            type="text"
            placeholder="Paste your video link here"
            className="neumorphic-input"
          />
        </label>

        <button
          className="neumorphic-button text-red-700 font-bold"
          type="button"
        >
          <i className="icon ion-md-lock mr-2"></i>Download
        </button>
      </form>
    </div>
  );
}

export default App;
