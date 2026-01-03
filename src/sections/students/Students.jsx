// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import student1 from "@/assets/student1.png";
import student2 from "@/assets/student2.png";
import student3 from "@/assets/student3.png";
import arrow from "@/assets/arrow.png";
import lamp from "@/assets/casual-life-3d-orange-planet-with-disk 1.png";
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

export default function Students() {
  const cardList = [
    {
      text: `“Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself”`,
      name: "Finlay Kirk",
      job: "Web Developper",
      image: student1,
    },
    {
      text: `“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”`,
      name: "Dannette P. Cervantes",
      job: "Web Design",
      image: student2,
    },
    {
      text: `“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”`,
      name: "Clara R. Altman",
      job: "UI/UX Design",
      image: student3,
    },
    {
      text: `“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”`,
      name: "Dannette P. Cervantes",
      job: "Web Design",
      image: student2,
    },
    {
      text: `“Teachings of the great explore of truth, 
  the master-builder of human happiness. 
  no one rejects,dislikes, or avoids pleasure 
  itself, pleasure itself”`,
      name: "Finlay Kirk",
      job: "Web Developper",
      image: student1,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        className=" relative flex flex-col justify-center gap-6 mb-30
    w-full md:w-[90%] xl:w-[70%]  mx-auto mt-20 lg:mt-30 "
      >
        {/* ARROW */}
        <motion.div
          initial={{ x: 0, rotate: 20 }}
          animate={{ x: 20, rotate: -10 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-30 absolute -left-10 xl:-left-30 -bottom-20"
        >
          <img src={arrow} />
        </motion.div>
        {/* LAMP */}
        <div className="w-30 absolute -right-10 xl:-right-30 -top-20 md:-bottom-20 md:top-auto">
          <img src={lamp} />
        </div>
        {/* Title */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-4xl">What student’s say</h1>
          <p className="text-primary-gray">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ x: -200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1, // mobile
              },
              640: {
                slidesPerView: 2, // small tablets
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {cardList.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card card={card} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}

function Card({ card }) {
  return (
    <div className="bg-white shadow-2xl flex flex-col gap-4 p-6 text-start">
      <p className="text-primary-gray text-sm">{card.text}</p>
      <div className="flex items-center gap-2">
        <div className="w-12">
          <img src={card.image} alt="student image" />
        </div>
        <div className="flex flex-col text-xs">
          <p className="font-bold">{card.name}</p>
          <p>{card.job}</p>
        </div>
      </div>
    </div>
  );
}
