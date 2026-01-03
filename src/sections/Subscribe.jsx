import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lamp from "@/assets/Tracks section/lamp.svg";
import arrow from "@/assets/orange-arrow.png";
import lamp2 from "@/assets/Tracks section/lamp2.png";
import { useState, useEffect } from "react";
import orangeFade from "@/assets/orange-fade.png";

export default function Subscribe() {
  const [lampImage, setLampImage] = useState(lamp);
  useEffect(() => {
    const interval = setInterval(() => {
      setLampImage((prev) => (prev === lamp ? lamp2 : lamp));
    }, 700);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="contact"
      className=" relative flex items-center justify-center w-[90%] lg:w-[80%]
    xl:w-[70%] mx-auto py-20 bg-primary-purple rounded-md text-white text-center"
    >
      {/* ARROW */}
      <div className="w-30 hidden md:block absolute left-10 lg:left-30 bottom-0">
        <img src={arrow} />
      </div>
      {/* LAMP */}
      <div className="w-30 hidden md:block absolute right-10 lg:right-20 bottom-10">
        <img src={lampImage} />
      </div>
      {/* Orange Fade right */}
      <div className="w-100 absolute -right-20 -bottom-20">
        <img src={orangeFade} />
      </div>
      {/* Orange Fade left */}
      <div className="w-100 absolute -left-10 -bottom-40">
        <img src={orangeFade} />
      </div>
      {/* White circles right */}
      <div className="absolute -top-10 -right-6">
        <div
          className=" absolute top-0 right-0 
        w-30 md:w-35 lg:w-40 aspect-square rounded-full border-3 border-white"
        ></div>
        <div
          className=" absolute -top-8 right-8 
        w-30 md:w-35 lg:w-40 aspect-square rounded-full border-3 border-white"
        ></div>
      </div>

      {/* White circles left */}
      <div className=" hidden lg:block absolute -top-10 -left-6">
        <div
          className=" absolute top-0 left-0 
        w-40 aspect-square rounded-full border-3 border-white"
        ></div>
        <div
          className=" absolute -top-8 left-8 
       w-40 aspect-square rounded-full border-3 border-white"
        ></div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl lg:text-3xl">
          Subscribe to our newsletter
        </h1>
        <p className="text-[13px] lg:text-sm">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className=" relative">
          <Input
            placeholder="Email Address"
            className="bg-white rounded-full border-none py-6 placeholder:text-sm placeholder:text-primary-gray pl-6"
          />
          <Button className=" absolute right-1 top-1 rounded-full px-10 py-5 bg-primary-orange hover:bg-primary-orange/50 cursor-pointer">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
