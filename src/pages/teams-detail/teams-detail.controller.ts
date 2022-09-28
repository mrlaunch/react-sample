import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Member, MemberModel } from "../../models";

export const useTeamsDetailController = () => {
  const params = useParams();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const teamId = params.id;
    if (!teamId) return;

    setMembers(MemberModel.filter((member) => member.team.id === +teamId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { members };
};
