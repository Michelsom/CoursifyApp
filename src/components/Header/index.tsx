import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./style";
import * as Icon from "../../assets/Icons";
export const HeaderHome = () => {
  return (
    <S.HeaderHome>
      <S.Header>
        <S.ContainerToLogo>
          <S.LogoImage resizeMode="contain" />
        </S.ContainerToLogo>
        <S.ButtonAdministrative>
          <S.IconsArrow name="menu" />
        </S.ButtonAdministrative>
      </S.Header>
    </S.HeaderHome>
  );
};

export const HeaderProduct = () => {
  const { goBack } = useNavigation();
  return (
    <S.HeaderHome>
      <S.Header>
        <S.ButtonAdministrative onPress={goBack}>
          <S.IconsArrow name="arrow-left" />
        </S.ButtonAdministrative>
        <S.ContainerToLogo>
          <S.LogoImage resizeMode="contain" />
        </S.ContainerToLogo>
        <S.ButtonAdministrative>
          <S.IconsArrow name="menu" />
        </S.ButtonAdministrative>
      </S.Header>
    </S.HeaderHome>
  );
};
