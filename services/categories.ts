import axios from "axios";
import { Category } from "../types/types";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getCategory = async (id: string): Promise<Category> => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
