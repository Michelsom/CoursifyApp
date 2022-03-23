import { Media } from "../models/media";
import { api } from "./api";

export async function getMedia(): Promise<Media[]> {
  try {
    const { data } = await api.get("media/");
    if (data) {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
}
