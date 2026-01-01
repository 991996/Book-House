import { navMenu } from "@/data/Data";
import SignInButton from "./SignInButton";

export function NavMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8 ml-auto">
      <ul className="flex items-center gap-5 font-[550]">
        {navMenu.map((nav, index) => {
          return (
            <li key={index}>
              <a href={nav.href} className="link">
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>
      <SignInButton />
    </nav>
  );
}
