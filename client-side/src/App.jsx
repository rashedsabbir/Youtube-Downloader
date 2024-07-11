import "./App.css";

function App() {
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
      <form className="flex items-center flex-col">
        <label className="block mb-6">
          <input
            type="text"
            placeholder="Paste your video link here"
            className="neumorphic-input w-96 p-4 placeholder:pl-6 text-black bg-gray-200 rounded-lg shadow-lg focus:outline-none focus:ring-gray-300"
          />
        </label>
        <button className="neumorphic-button font-bold w-32 p-4 bg-red-500 text-gray-100 rounded-lg shadow-lg shadow-red-300 focus:outline-none hover:border-0 focus:ring-gray-300">
          Download
        </button>
      </form>
    </div>
  );
}

export default App;
