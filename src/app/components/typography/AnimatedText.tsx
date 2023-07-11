"use client";
import { useState, useEffect, ReactNode } from "react";
import TextTransition, { presets } from "react-text-transition";

type AnimatedTextProps = {
  children?: ReactNode;
  className?: string;
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
    <TextTransition
      style={{
        zIndex: -1,
      }}
      springConfig={presets.wobbly}
      className={props.className}
    >
      {props.texts[textAnimation % props.texts.length]}
    </TextTransition>
  );
}

export default AnimatedText;
