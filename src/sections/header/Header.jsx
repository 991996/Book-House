import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "./NavigationMenu";

import { useState, useEffect } from "react";

function Header({ className }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(isSticky);

  return (
    <div className={className}>
      <div
        className={` w-full flex justify-between items-center duration-500 ${
          isSticky
            ? "fixed bg-primary-baige shadow-xl py-1 top-0 left-0 px-5 md:px-8 lg:px-6 xl:px-40 z-50"
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
  );
}

export default Header;
