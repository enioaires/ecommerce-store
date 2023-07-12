import axios from "axios";
import { Size } from "../types/types";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
export const getSizes = async (): Promise<Size[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};
