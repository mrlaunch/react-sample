import { FC, Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { MembersPage, TeamsDetailPage, TeamsPage, TodosPage } from "../pages";
import { NotFoundPage } from "../pages/not-found";
import {
  PATH_ANY,
  PATH_MEMBERS,
  PATH_ROOT,
  PATH_TEAMS,
  PATH_TEAMS_DETAIL,
  PATH_TODOS,
} from "./paths";

export const AppRouter: FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path={PATH_ROOT} element={<Navigate to={PATH_TEAMS} />} />
        <Route path={PATH_TEAMS} element={<TeamsPage />} />
        <Route path={PATH_TEAMS_DETAIL} element={<TeamsDetailPage />} />
        <Route path={PATH_MEMBERS} element={<MembersPage />} />
        <Route path={PATH_TODOS} element={<TodosPage />} />
        <Route path={PATH_ANY} element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
};
