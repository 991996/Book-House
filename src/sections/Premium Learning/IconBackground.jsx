import icon1 from "@/assets/Group.png";
import icon2 from "@/assets/Group-1.png";
import icon3 from "@/assets/Group-2.png";
import icon4 from "@/assets/Group-3.png";
import icon5 from "@/assets/Group-4.png";
import icon6 from "@/assets/Group-5.png";
import { motion } from "framer-motion";

export default function IconBackground() {
  return (
    <motion.div
      initial={{ x: 5, y: 0 }}
      animate={{ x: -5, y: -5 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className=" absolute w-full h-full inset-0"
    >
      <div className=" relative w-full h-full">
        <img src={icon1} className=" absolute bottom-0 right-4 w-15" />
        <img src={icon2} className=" absolute top-10 left-0 w-15" />
        <img src={icon3} className=" absolute top-40 -left-20 w-17" />
        <img src={icon4} className=" absolute top-12 right-4 w-13" />
        <img src={icon5} className=" absolute bottom-10 -left-4 w-15" />
        <img src={icon6} className=" absolute bottom-25 -right-6 w-15" />
      </div>
    </motion.div>
  );
}
