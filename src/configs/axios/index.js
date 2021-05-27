import axios from "axios";

import errorHandler from "./errorHandler";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
