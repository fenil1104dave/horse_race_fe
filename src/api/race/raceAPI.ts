import { APICaller } from "../Axios";

export const getAllRaces = () =>
  APICaller.get("/races").then((res) => res.data.data);
