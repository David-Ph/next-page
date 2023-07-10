import React from "react";
import Container from "./Container";
import MenuItem from "../typography/MenuItem";

function Sidebar() {
  return (
    <aside className="fixed hidden md:block">
      <Container>
        <div className="pt-48 flex flex-col gap-8">
          <MenuItem url="mailto:davidphang431@gmail.com">
            <i className="fa-solid fa-envelope text-4xl"></i>
          </MenuItem>
          <MenuItem url="https://www.linkedin.com/in/davidphang/">
            <i className="fa-brands fa-linkedin text-4xl"></i>
          </MenuItem>
          <MenuItem url="https://github.com/David-Ph">
            <i className="fa-brands fa-github text-4xl"></i>
          </MenuItem>
        </div>
      </Container>
    </aside>
  );
}

export default Sidebar;
