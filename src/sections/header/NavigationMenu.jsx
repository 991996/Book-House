import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navMenu } from "@/data/Data";
import SignInButton from "./SignInButton";

export function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:flex items-center gap-8 ml-auto">
      <NavigationMenuList className="flex-wrap text-primary-black font-[550]">
        {navMenu.map((nav, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className="text-[17px] bg-transparent hover:text-primary-red! hover:bg-transparent!"
              >
                <a href={nav.href}>{nav.title}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <SignInButton />
    </NavigationMenu>
  );
}
