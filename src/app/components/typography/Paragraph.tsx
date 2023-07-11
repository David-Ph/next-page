import React from "react";

type ParagraphProps = {
  children?: React.ReactNode;
  className?: string;
};

function Paragraph(props: ParagraphProps) {
  return (
    <p className={`text-slate-300 ` + props.className}>{props.children}</p>
  );
}

export default Paragraph;
