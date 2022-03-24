import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/app";
import { Posts } from "../../models/posts";
import * as S from "./style";

interface PostsProps {
  item: Posts;
}

export const PostComponent: React.FC<PostsProps> = ({ item }) => {
  const { goToPostSpecific, loading, media } = useContext(AppContext);
  const [image, setImage] = useState<string>();
  const { navigate } = useNavigation();
  function ImageComponent() {
    if (media) {
      media
        .filter((e) => e.post === item.id)
        .map((e) => {
          setImage(e.media_details.sizes.medium.source_url);
        });
    }
  }
  async function GoToPost() {
    const returnPost = await goToPostSpecific(item.id);
    if (returnPost) {
      navigate("Products" as never, { item: returnPost, image:image } as never);
    }
  }
  useEffect(() => {
    ImageComponent();
  }, []);

  return (
    <S.Content
      onPress={() => {
        GoToPost();
      }}
    >
      <S.ImageMedia
        source={{
          uri:
            image ||
            "https://blog.coursify.me/wp-content/uploads/2019/07/sell-on-social-networks-cover-coursfiyme-300x130.jpg",
        }}
        style={{ width: 235, height: 103 }}
      />
      <S.RowToTexts>
        <S.TextTitle>{item.title.rendered}</S.TextTitle>
        <S.Description numberOfLines={4}>{item.excerpt.rendered}</S.Description>
        <S.HeadMore>Leia mais</S.HeadMore>
      </S.RowToTexts>
    </S.Content>
  );
};
