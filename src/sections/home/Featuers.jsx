import icon1 from "@/assets/online-test 1.svg";
import icon2 from "@/assets/exam 1.svg";
import icon3 from "@/assets/certification 1.svg";

export default function Featuers({ className }) {
  const list = [
    {
      image: icon1,
      title: "Learn The Latest Skills",
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.`,
    },
    {
      image: icon2,
      title: "Learn The Latest Skills",
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.`,
    },
    {
      image: icon3,
      title: "Learn The Latest Skills",
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.`,
    },
  ];
  return (
    <div
      className={`bg-primary-purple rounded-md ${className}
    py-12 px-8`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {list.map((l, index) => {
          return <Featuer key={index} featuer={l} />;
        })}
      </div>
    </div>
  );
}

function Featuer({ featuer }) {
  return (
    <div className="flex gap-5">
      <div className="w-35 lg:w-50 h-fit bg-white/30 rounded-2xl p-4 mt-2">
        <img src={featuer.image} alt="icon" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold lg:text-lg">{featuer.title}</h1>
        <p className="text-primary-gray text-xs lg:text-sm">{featuer.text}</p>
      </div>
    </div>
  );
}
