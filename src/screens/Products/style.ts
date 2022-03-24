import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightColor};
`;
export const Box = styled.ScrollView``;

export const GlobalActivityIndicator = styled.ActivityIndicator.attrs({
  size: 50,
})`
  color: ${({ theme }) => theme.colors.primaryColor};
`;
export const GlobalStyleActivityIndicator = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const TextTitle = styled.Text`
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  color: ${({ theme }) => theme.colors.primaryColor};
`;
