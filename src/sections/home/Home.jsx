import homeImage from "@/assets/home-image.png";
import background from "@/assets/homeBG.png";
import SearchInput from "./SearchInput";

export default function Home() {
  return (
    <div
      className="pt-30 pb-40 sm:py-50 lg:pt-0 lg:pb-10 min-h-screen
     bg-primary-baige flex justify-center items-center"
    >
      <div className=" relative w-full">
        {/* Background Image */}
        <div className="h-full w-auto absolute inset-0 z-0">
          <img
            src={background}
            className="h-full w-full object-cover lg:object-contain"
            alt="Home Image"
          />
        </div>
        {/* CONTENT */}
        <div
          className=" relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-0
        justify-between items-center w-[90%] xl:w-[80%] mx-auto"
        >
          {/* TEXT */}
          <div className=" flex flex-col gap-6 w-full lg:w-[50%] xl:w-[40%]">
            {/* Title */}
            <div className=" flex flex-col">
              <h1 className="text-6xl font-bold capitalize">
                The <span className="text-primary-orange">smart </span>
              </h1>
              <h1 className="text-6xl font-bold capitalize">
                choice for <span className="text-primary-orange">future</span>
              </h1>
            </div>
            {/* Text */}
            <p className="text-primary-gray">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
            <SearchInput />
          </div>
          {/* IMAGE */}
          <div className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[60%] h-full">
            <img
              src={homeImage}
              className="w-full h-full object-contain"
              alt="Home Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
