import React from "react";
import Container from "../../layout/Container";
import { PAGE_SECTION } from "@/app/util/constants";
import AnimatedText from "../../typography/AnimatedText";
import { JOB_TITLE_TEXTS } from "../../../util/constants";

function Intro() {
  return (
    <Container>
      <section id={PAGE_SECTION.INTRO} className="flex flex-col gap-4">
        <h2 className="text-slate-400">Hi, my name is</h2>
        <h1 className="text-6xl font-bold text-white">David</h1>
        <AnimatedText
          className="text-6xl font-bold w-128 md:w-full"
          texts={JOB_TITLE_TEXTS}
        />
        <p className="mt-12 md:mt-0">
          I&apos;m a software developer based in Indonesia, Let&apos;s start
          scrolling and learn more about me.
        </p>
      </section>
    </Container>
  );
}

export default Intro;
