"use client";
import React, { useState } from "react";
import Container from "../../layout/Container";
import { PAGE_SECTION, PROJECTS } from "@/app/util/constants";
import Tabs from "../../ui/Tabs";
import TabItem from "../../ui/TabItem";
import Paragraph from "../../typography/Paragraph";
import Image from "next/image";

const findIndex = (id: number): number =>
  PROJECTS.findIndex((el) => el.id === id);

function Project() {
  const [activeItem, setActive] = useState(PROJECTS[0].id);
  const activeIndex = findIndex(activeItem);

  const onItemClick = (id: number) => {
    setActive(id);
  };

  return (
    <Container>
      <section id={PAGE_SECTION.PROJECT}>
        <h1 className="text-2xl font-bold text-center mb-4">PROJECTS</h1>
        <div>
          <Tabs>
            {PROJECTS.map((item) => (
              <TabItem
                key={item.id}
                id={item.id}
                active={item.id === activeItem}
                onClick={onItemClick}
              >
                {item.title}
              </TabItem>
            ))}
          </Tabs>
          <div className="flex flex-col gap-4 mt-4 text-center">
            <Image
              key={PROJECTS[activeIndex].id}
              className="rounded-xl mx-auto"
              alt={PROJECTS[activeIndex].title}
              src={PROJECTS[activeIndex].image_url}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 500, height: "auto" }}
            ></Image>
            <div className="flex justify-center flex-wrap gap-4">
              {PROJECTS[activeIndex].techs.map((item, index) => (
                <span className="font-bold text-sm text-slate-400" key={index}>
                  {item}
                </span>
              ))}
            </div>
            <a
              className="w-24 mx-auto rounded-md p-4 bg-slate-700 hover:bg-slate-500 duration-100"
              target="_blank"
              href={PROJECTS[activeIndex].github}
            >
              Github
            </a>
            <h4 className="text-xl font-bold">{PROJECTS[activeIndex].title}</h4>
            <Paragraph className="max-w-md mx-auto">
              {PROJECTS[activeIndex].description}
            </Paragraph>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Project;
