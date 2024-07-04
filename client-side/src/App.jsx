import "./App.css";

function App() {
  return (
    <>
      <form className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-xs mx-auto">
        <div className="segment">
          <h1 className="text-xl font-bold">Sign up</h1>
        </div>

        <label className="block mb-6">
          <input
            type="text"
            placeholder="Email Address"
            className="neumorphic-input"
          />
        </label>

        <button
          className="neumorphic-button text-red-700 font-bold"
          type="button"
        >
          <i className="icon ion-md-lock mr-2"></i> Log in
        </button>
      </form>
    </>
  );
}

export default App;
