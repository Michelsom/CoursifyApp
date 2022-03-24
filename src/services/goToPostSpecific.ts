import { SpecificPostInterface } from "../models/specificPost";
import { api } from "./api";

export async function GoToSpecificPost(
  IdPost: number
): Promise<SpecificPostInterface> {
  try {
    const { data } = await api.get(
      `https://blog.coursify.me/wp-json/wp/v2/posts/${IdPost}`
    );
    console.log("dentro da requisição", data);
    if (data) {
      return data;
    }
  } catch (error) {
    console.log("deu erro ", error);
    throw new Error(error);
  }
}
