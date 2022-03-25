import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { ActivityIndicator, FlatList, Image, Linking } from "react-native";
import { RenderItemCategories } from "../../components/CategoriesToHomePage";
import { HeaderHome } from "../../components/Header";
import * as S from "./style";
import AppContext from "../../context/app";
import { GoToWebPage } from "../../components/GoToWebPage/index";
import SelectDropdown from "react-native-select-dropdown";
import theme from "../../global/styles/theme";

export const Home = () => {
  const { media, categories, loading, posts } = useContext(AppContext);
  const countries = ["A-Z", "Z-A"];

  return (
    <S.Container>
      <StatusBar style={"inverted"} translucent={false} />
      {loading ? (
        <S.GlobalStyleActivityIndicator>
          <ActivityIndicator color={theme.colors.primaryColor} size={150} />
          <S.Consult>Consultando...</S.Consult>
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
                  <S.Box>
                    <S.ListFilter
                      defaultButtonText={"A-Z"}
                      data={countries}
                      onSelect={(selectedItem, index) => {}}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                    />
                  </S.Box>
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
