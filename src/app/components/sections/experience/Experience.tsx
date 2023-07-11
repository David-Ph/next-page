"use client";
import React, { useState } from "react";
import Container from "../../layout/Container";
import { PAGE_SECTION, EXPERIENCES } from "@/app/util/constants";
import Tabs from "../../ui/Tabs";
import TabItem from "../../ui/TabItem";
import Paragraph from "../../typography/Paragraph";

const findIndex = (id: number): number =>
  EXPERIENCES.findIndex((el) => el.id === id);

function Experience() {
  const [activeItem, setActive] = useState(EXPERIENCES[0].id);
  const activeIndex = findIndex(activeItem);

  const onItemClick = (id: number) => {
    setActive(id);
  };

  return (
    <Container>
      <section id={PAGE_SECTION.EXPERIENCE}>
        <h1 className="text-2xl font-bold text-center">Experiences</h1>
        <div>
          <Tabs>
            {EXPERIENCES.map((item) => (
              <TabItem
                key={item.id}
                id={item.id}
                active={item.id === activeItem}
                onClick={onItemClick}
              >
                {item.company}
              </TabItem>
            ))}
          </Tabs>
          <div className="mt-4">
            <h2 className="text-xl font-bold">
              {EXPERIENCES[activeIndex].title} @{" "}
              {EXPERIENCES[activeIndex].company}
            </h2>
            <p className="italic font-light text-sm">{EXPERIENCES[activeIndex].date}</p>
            <ul className="mt-2">
              {EXPERIENCES[activeIndex].descriptions.map((item, index) => (
                <li className="list-disc" key={index}>
                  <Paragraph>{item}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Experience;
