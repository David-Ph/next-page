"use client";
import { useState } from "react";
import Container from "./Container";
import MenuItem from "../typography/MenuItem";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-800 fixed w-full">
      <Container>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex justify-between">
            <div className="self-center">Logo</div>
            <div className="md:hidden">
              <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-5 md:self-center`}
          >
            <MenuItem url="">Resume</MenuItem>
            <MenuItem url="">About</MenuItem>
            <MenuItem url="">Experience</MenuItem>
            <MenuItem url="">Tech Stack</MenuItem>
            <MenuItem url="">Projects</MenuItem>
            <MenuItem url="">Contact</MenuItem>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
