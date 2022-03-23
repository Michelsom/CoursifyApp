import { Posts } from "../models/posts";
import { api } from "./api";

export async function getPosts(): Promise<Posts[]> {
  try {
    const { data } = await api.get("posts/");
    if (data) {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
}
