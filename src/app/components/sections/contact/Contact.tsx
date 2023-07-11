import React from "react";
import Container from "../../layout/Container";
import MenuItem from "../../typography/MenuItem";
import { PAGE_SECTION } from "@/app/util/constants";
import Paragraph from "../../typography/Paragraph";

function Contact() {
  return (
    <Container>
      <section
        id={PAGE_SECTION.CONTACT}
        className="flex flex-col gap-4 text-center"
      >
        <h1 className="text-2xl font-bold">Get in touch</h1>
        <Paragraph>
          If you&apos;re interested in collaborating with me, please contact me
          from one of the links below!
        </Paragraph>
        <div className="flex justify-center items-center gap-12">
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
      </section>
    </Container>
  );
}

export default Contact;
