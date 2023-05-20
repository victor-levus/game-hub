import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5649f62f61454e94a65f071f356744f2",
  },
});
