"use client";
import { useState, useEffect, ReactNode } from "react";
import TextTransition, { presets } from "react-text-transition";

type AnimatedTextProps = {
  children?: ReactNode;
  texts: string[];
};

function AnimatedText(props: AnimatedTextProps) {
  const [textAnimation, setTextAnimation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTextAnimation((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.wobbly}>
      {props.texts[textAnimation % props.texts.length]}
    </TextTransition>
  );
}

export default AnimatedText;