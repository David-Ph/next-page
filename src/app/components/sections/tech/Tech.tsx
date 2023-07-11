import React from "react";
import { TECH_STACK, PAGE_SECTION } from "@/app/util/constants";
import Container from "../../layout/Container";
import Image from "next/image";

function Tech() {
  return (
    <Container>
      <section id={PAGE_SECTION.TECH_STACK}>
        <h1 className="text-2xl font-bold text-center mb-8">Tech Stack</h1>
        <div className="flex flex-wrap mx-auto gap-4 justify-center max-w-lg">
          {TECH_STACK.map((tech) => (
            <Image
              key={tech.id}
              className="rounded-2xl"
              alt={tech.name}
              src={tech.image_url}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 100, height: "auto" }}
            ></Image>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Tech;
