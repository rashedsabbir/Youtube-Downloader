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

        <label className="block mb-6">
          <input
            type="password"
            placeholder="Password"
            className="neumorphic-input"
          />
        </label>

        <button
          className="neumorphic-button text-red-700 font-bold"
          type="button"
        >
          <i className="icon ion-md-lock mr-2"></i> Log in
        </button>

        <div className="segment flex justify-center mt-6">
          <button className="neumorphic-unit mr-2" type="button">
            <i className="icon ion-md-arrow-back"></i>
          </button>
          <button className="neumorphic-unit mr-2" type="button">
            <i className="icon ion-md-bookmark"></i>
          </button>
          <button className="neumorphic-unit" type="button">
            <i className="icon ion-md-settings"></i>
          </button>
        </div>

        <div className="input-group mt-6">
          <label className="block mb-2">
            <input
              type="text"
              placeholder="Email Address"
              className="neumorphic-input"
            />
          </label>
          <button className="neumorphic-unit" type="button">
            <i className="icon ion-md-search"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
