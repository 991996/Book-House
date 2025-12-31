import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "./NavigationMenu";

import { useState, useEffect } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-6">
      <div className=" w-[90%] xl:w-[80%] mx-auto">
        <div
          className={` w-full flex justify-between items-center duration-500 ${
            isSticky
              ? "fixed bg-primary-blue shadow-xl py-1 top-0 left-0 px-5 md:px-8 lg:px-6 xl:px-40 z-50"
              : ""
          }`}
        >
          <Logo isSticky={isSticky} />
          <NavMenu />
          <div className="flex gap-4">
            <MobileMenu />
          </div>
        </div>
      </div>
      <hr className="border-white/20" />
    </div>
  );
}

export default Header;
