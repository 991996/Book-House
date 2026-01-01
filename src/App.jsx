import "./App.css";
import Header from "./sections/header/Header";
import Featuers from "./sections/home/Featuers";
import Home from "./sections/home/Home";
import OurTracks from "./sections/ourTracks/OurTracks";

function App() {
  return (
    <div className="pb-50">
      <div className=" relative">
        <Header className=" absolute top-10 w-[90%] xl:w-[80%] left-1/2 -translate-x-1/2" />
        <Home />
      </div>
      <div className=" relative">
        <Featuers className=" absolute -top-25 w-[80%] xl:w-[75%] left-1/2 -translate-x-1/2" />
      </div>

      <OurTracks />
    </div>
  );
}

export default App;
