import { useContext } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import React from "react";

import { PostComponent } from "../PostComponent";
import * as S from "./style";
import AppContext from "../../context/app";
import { Category } from "../../models/categories";

interface PostsProps {
  item: Category;
}

export const RenderItemCategories: React.FC<PostsProps> = ({ item }) => {
  const { posts, loading } = useContext(AppContext);

  return (
    <S.Content>
      <S.RowToTexts>
        <S.TextTitle>{item.name}</S.TextTitle>
        <S.TextSeeMore>VER MAIS</S.TextSeeMore>
      </S.RowToTexts>
      <FlatList
        data={posts.filter((e) => e.categories.includes(item.id) )}
        horizontal={true}
        renderItem={({ item }) => <PostComponent item={item} />}
      />
      {/* <S.ViewProducts></S.ViewProducts> */}
    </S.Content>
  );
};
