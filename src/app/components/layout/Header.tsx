"use client";
import { useState } from "react";
import MenuItem from "../typography/MenuItem";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import { PAGE_SECTION } from "@/app/util/constants";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-800 fixed w-full mx-auto px-2 md:px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex justify-between">
          <div className="self-center">
            <Image
              className="rounded-full"
              alt="logo"
              src={"/logo.png"}
              width={40}
              height={40}
            ></Image>
          </div>
          <div className="md:hidden">
            <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-5 md:self-center delay-150`}
        >
          <MenuItem
            url="https://drive.google.com/file/d/1SaEQQFcIlH2UI7TPUxpBFGSIxEVdy9e3/view?usp=sharing"
            openInNewTab
          >
            Resume
          </MenuItem>
          <MenuItem url={`#${PAGE_SECTION.INFO}`}>About</MenuItem>
          <MenuItem url={`#${PAGE_SECTION.EXPERIENCE}`}>Experience</MenuItem>
          <MenuItem url={`#${PAGE_SECTION.TECH_STACK}`}>Tech Stack</MenuItem>
          <MenuItem url={`#${PAGE_SECTION.PROJECT}`}>Projects</MenuItem>
          <MenuItem url={`#${PAGE_SECTION.CONTACT}`}>Contact</MenuItem>
        </div>
      </div>
    </header>
  );
}

export default Header;
