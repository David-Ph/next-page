import React from "react";

type MenuItemProps = {
  children?: React.ReactNode;
  url: string;
};

function MenuItem(props: MenuItemProps) {
  return <a className="hover:text-cyan-700" href={props.url}>{props.children}</a>;
}

export default MenuItem;
