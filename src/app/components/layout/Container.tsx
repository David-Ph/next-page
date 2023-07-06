import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

function Container(props: ContainerProps) {
  return (
    <div className="lg:container mx-auto px-2 md:px-8 py-4 flex justify-between">
      {props.children}
    </div>
  );
}

export default Container;
