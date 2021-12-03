import axios from "axios";

const instance = axios.create({ baseURL: "https://social-network-mern-hb.herokuapp.com" });

export default instance;
