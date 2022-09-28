import { FC } from "react";
import { MemberModel } from "../../models";
import { MembersProps } from "./members.props";

export const MembersPage: FC<MembersProps> = () => {
  return (
    <div className="p-4">
      <h1>Members</h1>
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
            {MemberModel.map((member, index) => (
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
