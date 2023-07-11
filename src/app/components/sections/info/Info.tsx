import React from "react";
import Container from "../../layout/Container";
import { PAGE_SECTION } from "@/app/util/constants";
import Image from "next/image";
import Paragraph from "../../typography/Paragraph";

function Info() {
  return (
    <Container>
      <section
        id={PAGE_SECTION.INFO}
        className="flex flex-col md:flex-row justify-between gap-4"
      >
        <div className="flex justify-center items-center">
          <Image
            className="rounded-full"
            alt="profilepicture"
            src={"/profilepic.jpg"}
            width={200}
            height={200}
          ></Image>
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          <Paragraph>
            Hi! I&apos;m a dedicated and self-taught software developer who is
            passionate about creating innovative solutions. With 6 years of
            experience in IT support and 1 year as a Software Developer, I have
            gained valuable insights into technology and its practical
            applications.
          </Paragraph>
          <Paragraph>
            Throughout my journey, I have gained experience in various
            technologies, including ReactJS, NodeJS, Laravel, and Golang. My
            strong problem-solving abilities enable me to tackle complex
            challenges with confidence.
          </Paragraph>
          <Paragraph>
            What sets me apart is my ability to effectively communicate and
            collaborate within a team. I like sharing knowledge and working
            alongside colleagues to achieve our goals. I highly value open and
            transparent communication, which fosters a trusting and supporting
            environment.
          </Paragraph>
          <Paragraph>
            As I continue to grow in the software engineering field, I&apos;m
            always seeking new opportunities to expand my expertise and take on
            fresh challenges.
          </Paragraph>
        </div>
      </section>
    </Container>
  );
}

export default Info;
