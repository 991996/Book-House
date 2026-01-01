import logo from "@/assets/logo.png";

function Logo({ isSticky = false }) {
  return (
    <a href="#home">
      <div className={isSticky ? "w-20 md:w-25" : "w-30 md:w-37.5"}>
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
    </a>
  );
}

export default Logo;
