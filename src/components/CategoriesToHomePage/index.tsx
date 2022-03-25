import React, { useContext } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import { Category } from "../../models/categories";
import { PostComponent } from "../PostComponent";
import AppContext from "../../context/app";
import * as S from "./style";
import theme from "../../global/styles/theme";

interface PostsProps {
  item: Category;
}

export const RenderItemCategories: React.FC<PostsProps> = ({ item }) => {
  const { posts, loading, media, categories } = useContext(AppContext);

  return (
    <S.Content>
      {loading && media.length === 0 ? (
        <S.GlobalStyleActivityIndicator>
          <ActivityIndicator color={theme.colors.primaryColor} size={150} />
          <S.Consult>Consultando...</S.Consult>
        </S.GlobalStyleActivityIndicator>
      ) : (
        <>
          <S.RowToTexts>
            <S.TextTitle>{item.name.toUpperCase()}</S.TextTitle>
            <S.TextSeeMore>VER MAIS</S.TextSeeMore>
          </S.RowToTexts>
          <FlatList
            data={posts.filter((e) => e.categories.includes(item.id))}
            horizontal={true}
            renderItem={({ item }) => <PostComponent item={item} />}
          />
        </>
      )}
    </S.Content>
  );
};
