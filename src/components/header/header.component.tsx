import { FC } from "react";

import { useHeaderController } from "./header.controller";
import { HeaderProps } from "./header.props";

export const Header: FC<HeaderProps> = () => {
  const { headerItems, selected, selectMenu } = useHeaderController();

  return (
    <div className="bg-main">
      <ul className="flex m-0 py-4">
        {headerItems.map((item, index) => (
          <li
            key={index}
            className={`list-none underline p-4 pointer ${
              selected === index ? "text-selected" : "text-white"
            }`}
            onClick={() => selectMenu(index, item.path)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
