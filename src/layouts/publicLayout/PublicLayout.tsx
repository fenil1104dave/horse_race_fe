import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div>
      <h1>Public Layout</h1>
      <Outlet />
    </div>
  );
};
