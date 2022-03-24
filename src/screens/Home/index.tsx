import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { FlatList, Image, Linking } from "react-native";
import { RenderItemCategories } from "../../components/CategoriesToHomePage";
import { HeaderHome } from "../../components/Header";
import * as S from "./style";
import React from "react";
import AppContext from "../../context/app";
import { GoToWebPage } from "../../components/GoToWebPage/inde";

export const Home = () => {
  const { categories, loading } = useContext(AppContext);

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
            data={categories}
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
              return <GoToWebPage />;
            }}
          />
        </>
      )}
    </S.Container>
  );
};
