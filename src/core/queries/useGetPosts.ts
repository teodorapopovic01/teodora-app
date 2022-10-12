import { useQuery } from "react-query";
import axios from "axios";
export const key = ["POSTS"];

const axiosInstance = axios.create({
  baseURL: "https://www.index.hr/testni-zadatak/oglasi",
});

export const useGetPosts = () => {
  return useQuery(key, async () => {
    const { data } = await axiosInstance.get(
      "https://www.index.hr/testni-zadatak/oglasi",
      {}
    );

    return data;
  });
};
