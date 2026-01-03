import teacher1 from "@/assets/teachers/teacher1.png";
import teacher2 from "@/assets/teachers/teacher2.png";
import teacher3 from "@/assets/teachers/teacher3.png";
import instagram from "@/assets/teachers/Instagram_logo.png";
import linkedin from "@/assets/teachers/linkedin-logo.png";
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

export default function Teachers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const teachersList = [
    {
      image: teacher1,
      name: "Matthew E. McNatt",
      job: "Professor @George Brown College",
      text: `Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo.`,
      education: "Engineering physics",
    },
    {
      image: teacher2,
      name: "Tracy D. Wright",
      job: "Professor @George Brown College",
      text: `Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo.`,
      education: "Engineering physics",
    },
    {
      image: teacher3,
      name: "Cynthia A. Nelson",
      job: "Professor @George Brown College",
      text: `Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo.`,
      education: "Engineering physics",
    },
  ];
  return (
    <section
      id="teachers"
      className="flex flex-col justify-center gap-8 lg:gap-12 mb-30
    w-[90%] xl:w-[75%] mx-auto mt-30"
    >
      {/* Title */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-4xl">Our Teachers</h1>
        <p className="text-primary-gray">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
      <motion.div
        ref={ref}
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.9,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {teachersList.map((teacher, index) => {
          return <Teacher key={index} teacher={teacher} />;
        })}
      </motion.div>
    </section>
  );
}

function Teacher({ teacher }) {
  return (
    <div className="rounded-lg shadow-2xl flex flex-col gap-4 p-4 text-sm">
      {/* Image */}
      <div className="w-full h-40">
        <img
          src={teacher.image}
          alt="Track image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* text */}
      <div className="flex flex-col">
        <h1 className="font-[550]">{teacher.name}</h1>
        <p className="text-gray-600 text-xs">{teacher.job}</p>
      </div>
      <p className="text-primary-gray text-[13px]">{teacher.text}</p>
      <div className="flex justify-between items-center">
        <p className="text-primary-orange text-[13px]">{teacher.education}</p>
        <div className="flex items-center gap-2">
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
