import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATH_MEMBERS, PATH_TEAMS, PATH_TODOS } from "../../routes";

export const useHeaderController = () => {
  const headerItems = [
    { title: "Teams", path: PATH_TEAMS },
    { title: "Members", path: PATH_MEMBERS },
    { title: "Todos", path: PATH_TODOS },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    headerItems.forEach((item, index) => {
      if (item.path === location.pathname) {
        setSelected(index);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectMenu = (index: number, path: string) => {
    setSelected(index);
    navigate(path);
  };

  return { selected, selectMenu, headerItems };
};
