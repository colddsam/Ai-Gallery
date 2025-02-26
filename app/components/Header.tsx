// import Link from "next/link"

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconLibraryPhoto  } from "@tabler/icons-react";

const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
    {
      name: "Gallery",
      link: "/gallery",
      icon: (
        <IconLibraryPhoto className="h-5 w-5 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />
      ),
  },
    
  ];

const Header = () => {
  return (
   <FloatingNav navItems={navItems}/>
  )
}

export default Header

