import React from "react";
import { Image, Linking } from "react-native";
import * as S from "./style";
export const GoToWebPage = () => {
  return (
    <S.ViewBottom>
      <Image
        resizeMode="contain"
        source={require("../../assets/Icons/logo-coursify-w.png")}
        style={{ width: 150, height: 60 }}
      />
      <S.TextDescription>
        O Coursify.me é uma plataforma de ensino a distância,{"\n"}
        onde qualquer pessoa ou empresa pode construir seu{"\n"}EAD e vender
        cursos pela internet.
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
};
