import axios from "axios";

const APICaller = axios;

APICaller.defaults.baseURL = "http://localhost:3000/api/v1";

export { APICaller };
