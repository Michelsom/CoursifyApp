import { Category } from "../models/categories";
import { api } from "./api";

export async function getCategories(): Promise<Category[]> {
  try {
    const { data } = await api.get("categories/");
    if (data) {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
}
