import image from "@/assets/OBJECTS.png";
import icon1 from "@/assets/hearts 1.svg";
import icon2 from "@/assets/jigsaw 1.svg";
import IconBackground from "./IconBackground";

export default function PremiumLearning() {
  const list = [
    {
      image: icon1,
      title: "Easily Accessible",
      text: `Learning Will fell Very Comfortable With Courslab.`,
    },
    {
      image: icon2,
      title: "Fun learning expe",
      text: `Learning Will fell Very Comfortable With Courslab.`,
    },
  ];
  return (
    <div className="bg-primary-baige min-h-60 w-full flex justify-center items-center">
      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-[80%] xl:w-[65%] mx-auto">
        {/* Image */}
        <div className="relative w-100 h-100">
          <img
            src={image}
            alt="Image"
            className="absolute -top-10 lg:top-10 w-full h-full object-contain z-1"
          />
          {/* background */}
          <IconBackground />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-8 pb-10 lg:pb-0">
          <div>
            <h1 className="text-4xl font-bold">
              Premium
              <span className="text-primary-orange"> Learning </span>
            </h1>
            <h1 className="text-4xl font-bold mt-2">Experience</h1>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {list.map((l, index) => {
              return <Item key={index} item={l} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-fit h-fit bg-primary-purple rounded-2xl p-4 mt-2">
        <img src={item.image} alt="icon" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg lg:text-xl">{item.title}</h1>
        <p className="text-primary-gray text-sm lg:text-base">{item.text}</p>
      </div>
    </div>
  );
}
