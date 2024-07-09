import Weather from "./components/Weather";
import RainbowAnimation from "./RainbowAnimation";

const App = () => {
  return (
    <div className="app">
      <RainbowAnimation />
      <div className="content"></div>
      <Weather />
    </div>
  );
};

export default App;
