import { FC } from "react";
import { TeamModel } from "../../models";
import { useTeamsController } from "./teams.controller";
import { TeamsProps } from "./teams.props";

export const TeamsPage: FC<TeamsProps> = () => {
  const { viewTeamDetail } = useTeamsController();

  return (
    <div className="p-4">
      <h1>Teams</h1>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Member Count</th>
            </tr>
          </thead>
          <tbody>
            {TeamModel.map((team, index) => (
              <tr key={index}>
                <td>{team.id}</td>
                <td
                  className="underline pointer text-link"
                  onClick={() => viewTeamDetail(team.id)}
                >
                  {team.name}
                </td>
                <td>{team.member_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
