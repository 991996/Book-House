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
    <div
      className={`flex justify-between items-center duration-500 ${
        isSticky
          ? "fixed w-full bg-primary-baige shadow-xl py-4 top-0 left-0 px-5 md:px-8 lg:px-6 xl:px-40 z-50"
          : "absolute top-10 w-[80%] xl:w-[75%] left-1/2 -translate-x-1/2"
      }`}
    >
      <Logo isSticky={isSticky} />
      <NavMenu />
      <div className="flex gap-4">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
