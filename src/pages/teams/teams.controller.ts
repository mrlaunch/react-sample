import { useNavigate } from "react-router-dom";
import { PATH_TEAMS } from "../../routes";

export const useTeamsController = () => {
  const navigate = useNavigate();

  const viewTeamDetail = (id: number) => {
    navigate(`${PATH_TEAMS}/${id}`);
  };

  return { viewTeamDetail };
};
