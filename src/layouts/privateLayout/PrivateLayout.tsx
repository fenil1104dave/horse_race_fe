import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
};
