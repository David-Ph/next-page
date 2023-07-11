import React from "react";

type TabsProps = {
  children?: React.ReactNode;
  className?: string;
};

function Tabs(props: TabsProps) {
  return (
    <div
      className={
        `text-sm font-medium text-slate-400 border-b border-slate-200 dark:text-gray-400 dark:border-gray-700 ` +
        props.className
      }
    >
      <ul className="flex flex-wrap -mb-px">{props.children}</ul>
    </div>
  );
}

export default Tabs;
