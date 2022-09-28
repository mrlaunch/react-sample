import { FC } from "react";
import { useTeamsDetailController } from "./teams-detail.controller";
import { TeamsDetailProps } from "./teams-detail.props";

export const TeamsDetailPage: FC<TeamsDetailProps> = () => {
  const { members } = useTeamsDetailController();

  return (
    <div className="p-4">
      <h1>Teams Detail</h1>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Eamil</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.id}</td>
                <td>{`${member.first_name} ${member.last_name}`}</td>
                <td>{member.email}</td>
                <td>{member.team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
