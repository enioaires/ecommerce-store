import axios from "axios";
import { Color } from "../types/types";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
export const getColors = async (): Promise<Color[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};
