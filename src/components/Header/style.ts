import styled from "styled-components/native";
import { actuatedNormalize } from "../../utils/font-size";
import { Feather } from "@expo/vector-icons";

export const HeaderHome = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightColor};
  flex-direction: row;
  height: 64px;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.lightColor} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  elevation: 2;
`;

export const ContainerToLogo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px 17px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonAdministrative = styled.TouchableOpacity`
  align-items: center;
  width: 42px;
  height: 42px;
  background: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 30px;
  justify-content: center;
`;
export const LogoImage = styled.Image.attrs({
  source: require("../../assets/Icons/logo.png"),
})`
  width: 169px;
  height: 50px;
`;
export const IconsArrow = styled(Feather)`
  font-size: ${actuatedNormalize(25)}px;
  color: ${({ theme }) => theme.colors.lightColor};
`;
