import "./App.css";
import Header from "./sections/header/Header";
import Featuers from "./sections/home/Featuers";
import Home from "./sections/home/Home";
import OurTracks from "./sections/ourTracks/OurTracks";
import PremiumLearning from "./sections/Premium Learning/PremiumLearning";

function App() {
  return (
    <div className="pb-50">
      <div className=" relative">
        <Header />
        <Home />
      </div>
      <div className=" relative">
        <Featuers className=" absolute -top-25 w-[80%] xl:w-[75%] left-1/2 -translate-x-1/2" />
      </div>

      <OurTracks />
      <PremiumLearning />
    </div>
  );
}

export default App;
