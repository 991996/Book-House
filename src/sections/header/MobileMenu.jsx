import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";

import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { contactInfo, navMenu } from "@/data/Data";
import SignInButton from "./SignInButton";

const contactList = [
  {
    text: contactInfo.email,
    icon: <IoIosMail />,
  },
  {
    text: contactInfo.phoneNumber,
    icon: <FaPhoneVolume />,
  },
];

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden text-primary-purple cursor-pointer">
          <FiMenu size={25} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-primary-baige px-4 [&_button]:text-primary-black p-4 overflow-y-auto max-h-screen"
      >
        <SheetHeader></SheetHeader>
        <div className="flex flex-col gap-8">
          <Logo />
          <nav className="flex flex-col gap-4 mt-6 text-primary-black">
            {navMenu.map((nav, index) => {
              return (
                <a
                  key={index}
                  className="text-[17px] font-medium hover:underline cursor-pointer"
                  href={nav.href}
                >
                  {nav.title}
                </a>
              );
            })}
          </nav>
          <SignInButton />

          <div className="flex flex-col gap-3 text-primary-orange">
            {contactList.map((c, index) => {
              return (
                <div
                  className="flex items-center gap-2 text-primary-red"
                  key={index}
                >
                  {c.icon}
                  <p className="text-gray-500">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
