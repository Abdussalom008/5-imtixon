import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"], 
    queryFn: async () => {
      const res = await api.get("/getall"); 
      return res.data;
    },
  });
};
