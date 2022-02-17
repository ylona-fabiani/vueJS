import axios from "axios";

export const getSkills = () => {
  return axios.get("http://localhost:3000/getSkills");
};
