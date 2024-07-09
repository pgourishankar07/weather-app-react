import Weather from "./components/Weather";
import RainbowAnimation from "./RainbowAnimation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="centre">
          <h1>Weather App</h1>
        </div>
      </div>

      <RainbowAnimation />
      <div className="content"></div>
      <Weather />
      <div className="container">
        <div className="centre">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
