import React from "react";

type TabItemProps = {
  children?: React.ReactNode;
  onClick: (id: number) => void;
  id: number;
  active: boolean;
};

function TabItem(props: TabItemProps) {
  const handleClick = (id: number) => {
    props.onClick(id);
  };

  const classes = props.active
    ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <li className="mr-2">
      <button onClick={() => handleClick(props.id)} className={classes}>
        {props.children}
      </button>
    </li>
  );
}

export default TabItem;
