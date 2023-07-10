import React from "react";

type MenuItemProps = {
  children?: React.ReactNode;
  openInNewTab?: boolean;
  url: string;
};

function MenuItem(props: MenuItemProps) {
  return (
    <a
      className="hover:text-cyan-700"
      href={props.url}
      target={props.openInNewTab ? "_blank" : ""}
    >
      {props.children}
    </a>
  );
}

export default MenuItem;
