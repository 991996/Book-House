import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/header/Header";
import Featuers from "./sections/home/Featuers";
import Home from "./sections/home/Home";
import OurTracks from "./sections/ourTracks/OurTracks";
import PremiumLearning from "./sections/Premium Learning/PremiumLearning";
import Students from "./sections/students/Students";
import Subscribe from "./sections/Subscribe";
import Teachers from "./teacher/Teachers";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-primary-baige z-50">
        <span class="loader"></span>
      </div>
    );
  }

  return (
    <div>
      <div className=" relative">
        <Header />
        <Home />
      </div>
      <div className=" relative">
        <Featuers className=" absolute -top-25 w-[80%] xl:w-[75%] left-1/2 -translate-x-1/2" />
      </div>

      <OurTracks />
      <PremiumLearning />
      <Students />
      <Teachers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
