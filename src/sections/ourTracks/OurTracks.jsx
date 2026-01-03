import track1 from "@/assets/Tracks section/track1.png";
import track2 from "@/assets/Tracks section/track2.png";
import track3 from "@/assets/Tracks section/track3.png";
import { Clock3, Download, Video } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import arrow from "@/assets/Tracks section/arrow.svg";
import lamp from "@/assets/Tracks section/lamp.svg";
import lamp2 from "@/assets/Tracks section/lamp2.png";
import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

export default function OurTracks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tracksList = [
    {
      image: track1,
      title: "UI/UX Design for Beginners",
      category: "UI/UX Design",
      rate: 4,
      price: 75,
      duration: "22hr 10min",
      courses: 34,
      sales: 250,
    },
    {
      image: track2,
      title: "Back-End for Beginners",
      category: "Programming",
      rate: 5,
      price: 98,
      duration: "19hr 30min",
      courses: 25,
      sales: 210,
    },
    {
      image: track3,
      title: "Front-End for Beginners",
      category: "Programming",
      rate: 3,
      price: 49,
      duration: "28hr 40min",
      courses: 30,
      sales: 180,
    },
  ];

  const [lampImage, setLampImage] = useState(lamp);
  useEffect(() => {
    const interval = setInterval(() => {
      setLampImage((prev) => (prev === lamp ? lamp2 : lamp));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="courses"
      className=" relative flex flex-col justify-center gap-8 lg:gap-12 mb-30
    w-[90%] xl:w-[80%] mx-auto mt-110 sm:mt-100 md:mt-70 xl:mt-50"
    >
      {/* ARROW */}
      <div className="w-30 absolute -right-20 -top-10">
        <img src={arrow} />
      </div>
      {/* LAMP */}
      <div className="w-30 absolute -left-20 -top-10">
        <img src={lampImage} />
      </div>
      {/* Title */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-4xl">Our Tracks</h1>
        <p className="text-primary-gray">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
      <motion.div
        ref={ref}
        initial={{ x: -80, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {tracksList.map((track, index) => {
          return <Track key={index} track={track} />;
        })}
      </motion.div>
    </section>
  );
}

function Track({ track }) {
  return (
    <div className=" relative rounded-lg shadow-2xl flex flex-col gap-4 p-4 pb-10">
      {/* Image */}
      <div className="w-full h-40">
        <img
          src={track.image}
          alt="Track image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* text */}
      <div>
        <div className="flex justify-between items-center w-full">
          <p className="text-xs text-primary-gray">{track.category}</p>
          {/* Stars */}
          <div className="grid grid-cols-5">{handleRate(track.rate)}</div>
        </div>
        <h1>{track.title}</h1>
        <p className="text-primary-orange font-[550]">${track.price}</p>
      </div>
      {/* Dotted Line */}
      <div className="border-b-2 border-dotted"></div>

      <div className="flex gap-3 text-xs">
        <div className="flex gap-1 items-center">
          <Clock3 size={14} />
          <p className="text-primary-gray">{track.duration}</p>
        </div>
        <div className="flex gap-1 items-center">
          <Video size={16} />
          <p className="text-primary-gray">{track.courses} Courses</p>
        </div>
        <div className="flex gap-1 items-center">
          <Download size={14} />
          <p className="text-primary-gray">{track.sales} Sales</p>
        </div>
      </div>
      {/* Button join course */}
      <Button
        className=" absolute -bottom-5 left-1/2 -translate-x-1/2 capitalize bg-primary-orange rounded-full 
      px-8 py-5 cursor-pointer hover:bg-primary-orange/80 duration-300"
      >
        join course
      </Button>
    </div>
  );
}

function handleRate(rate) {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    i <= rate
      ? stars.push(
          <div className="text-primary-orange/80">
            <FaStar size={12} />
          </div>
        )
      : stars.push(
          <div className="text-primary-orange/30">
            <FaStar size={12} />
          </div>
        );
  }
  return stars;
}
