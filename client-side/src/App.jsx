import "./App.css";

function App() {
  return (
    <div className="py-8">
      <form className="bg-gray-200 p-4 m-16 rounded-lg shadow-lg max-w-3xl mx-auto flex items-center flex-col">
        <div className="grid grid-cols-1 gap-6 place-items-center">
          <img className="w-16 h-16" src="../public/youtube.svg" alt="" />
          <p className="text-4xl text-black text-center font-bold">
            YouTube Video Downloader
          </p>
          <p className="text-md pb-6 text-black text-center">
            Paste the YouTube video URL and instantly download videos for
            offline viewing.
          </p>
        </div>
        <label className="block mb-6">
          <input
            type="text"
            placeholder="Paste your video link here"
            className="neumorphic-input w-96 text-black"
          />
        </label>

        <button className="neumorphic-button font-bold" type="button">
          Download
        </button>
      </form>
    </div>
  );
}

export default App;
