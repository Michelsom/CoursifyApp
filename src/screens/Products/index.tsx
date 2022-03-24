import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import * as S from "./style";
import React from "react";
import AppContext from "../../context/app";
import { HeaderProduct } from "../../components/Header";
import { Image } from "react-native";
import HTMLView from "react-native-htmlview";
import theme from "../../global/styles/theme";
import { GoToWebPage } from "../../components/GoToWebPage/index";

export const Products = ({ route }) => {
  const { loading } = useContext(AppContext);
  const htmlContent = route.params.item.content.rendered;

  return (
    <S.Container>
      <StatusBar style={"inverted"} translucent={false} />
      {loading ? (
        <S.GlobalStyleActivityIndicator>
          <S.GlobalActivityIndicator />
        </S.GlobalStyleActivityIndicator>
      ) : (
        <>
          <HeaderProduct />
          <S.Box>
            <S.TextTitle>{route.params.item.title.rendered}</S.TextTitle>
            <HTMLView value={htmlContent} style={{ padding: 10,}} />
          <GoToWebPage/>
          </S.Box>
        </>
      )}
    </S.Container>
  );
};
