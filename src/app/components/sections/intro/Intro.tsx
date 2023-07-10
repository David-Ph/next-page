import React from "react";
import Container from "../../layout/Container";
import { PAGE_SECTION } from "@/app/util/constants";
import AnimatedText from "../../typography/AnimatedText";
import { JOB_TITLE_TEXTS } from "../../../util/constants";

function Intro() {
  return (
    <Container>
      <section id={PAGE_SECTION.INTRO} className="flex flex-col gap-4">
        <h2 className="text-slate-300">Hi, my name is</h2>
        <h1 className="text-6xl font-bold">David</h1>
        <AnimatedText className="text-6xl font-bold text-slate-300" texts={JOB_TITLE_TEXTS} />
      </section>
    </Container>
  );
}

export default Intro;
