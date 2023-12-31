import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

function Container(props: ContainerProps) {
  return (
    <div className="lg:container mx-auto px-4 md:px-8 py-16">
      {props.children}
    </div>
  );
}

export default Container;
