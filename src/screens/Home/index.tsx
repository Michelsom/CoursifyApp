import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { FlatList, Image, Linking } from "react-native";
import { RenderItemCategories } from "../../components/CategoriesToHomePage";
import { HeaderHome } from "../../components/Header";
import * as S from "./style";
import React from "react";
import AppContext from "../../context/app";

export const Home = () => {
  const { categories, loading, media, posts } = useContext(AppContext);

  return (
    <S.Container>
      <StatusBar style={"inverted"} translucent={false} />
      {loading ? (
        <S.GlobalStyleActivityIndicator>
          <S.GlobalActivityIndicator />
        </S.GlobalStyleActivityIndicator>
      ) : (
        <>
          <HeaderHome />

          <FlatList
            data={categories.map((cat) => {
              if (posts.map((post) => post.categories.includes(cat.id))) {
                return cat;
              }
            })}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({ item }) => <RenderItemCategories item={item} />}
            ListHeaderComponent={() => {
              return (
                <S.ContainerFilter>
                  <S.TextFilter>ORDENAR POR:</S.TextFilter>
                  <S.ListFilter>
                    <S.TextFilter style={{ marginLeft: 15 }}>A-Z</S.TextFilter>
                    <S.IconsArrow name="chevron-down" />
                  </S.ListFilter>
                </S.ContainerFilter>
              );
            }}
            ListFooterComponent={() => {
              return (
                <S.ViewBottom>
                  <Image
                  resizeMode="contain"
                    source={require("../../assets/Icons/logo-coursify-w.png")}
                    style={{  width: 150, height: 60 }}
                  />
                  <S.TextDescription>
                    O Coursify.me é uma plataforma de ensino a distância,{"\n"}
                    onde qualquer pessoa ou empresa pode construir seu{"\n"}EAD
                    e vender cursos pela internet.
                  </S.TextDescription>
                  <S.ButtonNavigateFromWebSite
                    onPress={() => {
                      Linking.openURL("https://coursify.me/");
                    }}
                  >
                    <S.TextButton>Quero conhecer a plataforma!</S.TextButton>
                  </S.ButtonNavigateFromWebSite>
                </S.ViewBottom>
              );
            }}
          />
        </>
      )}
    </S.Container>
  );
};
