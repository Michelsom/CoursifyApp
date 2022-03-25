import React, { useContext } from "react";
import { FlatList } from "react-native";

import { Category } from "../../models/categories";
import { PostComponent } from "../PostComponent";
import AppContext from "../../context/app";
import * as S from "./style";

interface PostsProps {
  item: Category;
}

export const RenderItemCategories: React.FC<PostsProps> = ({ item }) => {
  const { posts, loading } = useContext(AppContext);

  return (
    <S.Content>
      <S.RowToTexts>
        <S.TextTitle>{item.name.toUpperCase()}</S.TextTitle>
        <S.TextSeeMore>VER MAIS</S.TextSeeMore>
      </S.RowToTexts>
      <FlatList
        data={posts.filter((e) => e.categories.includes(item.id))}
        horizontal={true}
        renderItem={({ item }) => <PostComponent item={item} />}
      />
    </S.Content>
  );
};
