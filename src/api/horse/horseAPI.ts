import { APICaller } from "../Axios";

export const getAllHorses = () =>
  APICaller.get("/horses").then((res) => res.data.data);
