export type Team = {
  id: number;
  name: string;
  member_count: number;
};
export const TeamModel: Team[] = [
  {
    id: 1,
    name: "Project",
    member_count: 2,
  },
  {
    id: 2,
    name: "Engineering",
    member_count: 4,
  },
  {
    id: 3,
    name: "Design",
    member_count: 2,
  },
  {
    id: 4,
    name: "QA",
    member_count: 2,
  },
];
