import React, { createContext, useEffect, useState } from "react";
import { Category } from "../models/categories";
import { Posts } from "../models/posts";
import { Media } from "../models/media";
import { getCategories } from "../services/getCategories";
import { getPosts } from "../services/getPosts";
import { getMedia } from "../services/getMedia";

interface AppContextData {
  categories: Category[] | undefined;
  posts: Posts[];
  media: Media[];
  loading: boolean;
}
const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(false);
  async function getCategoriesList() {
    try {
      setLoading(true);
      const receptCategories = await getCategories();
      if (receptCategories) setCategories(receptCategories);
    } catch (error) {
      console.log(error, "Erro na requisição de categories");
    } finally {
      setLoading(false);
    }
  }

  async function getPostsList() {
    try {
      setLoading(true);

      const receptCategories = await getPosts();
      if (receptCategories) setPosts(receptCategories);
    } catch (error) {
      console.log(error, "Erro na requisição de Posts");
    } finally {
      setLoading(false);
    }
  }

  async function getMediaFiles() {
    try {
      setLoading(true);
      const receptCategories = await getMedia();
      if (receptCategories) setMedia(receptCategories);
    } catch (error) {
      console.log(error, "Erro na requisição de Posts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoriesList();
    getPostsList();
    getMediaFiles();
  }, []);
  return (
    <AppContext.Provider value={{ categories, media, posts, loading }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
