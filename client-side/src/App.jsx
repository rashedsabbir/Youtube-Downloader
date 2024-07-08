import "./App.css";

function App() {
  return (
    <div className="bg-white flex flex-row justify-center">
      <div className="segment">
        <h1 className="text-2xl text-black font-bold">
          YouTube Video Downloader
        </h1>
        <h3 className="text-sm text-black font-mono">
          Paste the YouTube video URL and instantly download videos for offline
          viewing.
        </h3>
      </div>
      <form className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-xs mx-auto">
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
