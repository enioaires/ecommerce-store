import axios from "axios";
import { Billboard } from "../types/types";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
