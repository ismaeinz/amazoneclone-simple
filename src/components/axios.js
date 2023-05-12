import axios from "axios";

const Instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-de483/us-central1/api",
});
export default Instance;
