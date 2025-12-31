import logo from "@/assets/logo.png";

function Logo({ isSticky = false }) {
  return (
    <a href="#home">
      <div
        className={isSticky ? "w-20 md:w-[100px]" : "w-[120px] md:w-[150px]"}
      >
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
    </a>
  );
}

export default Logo;
