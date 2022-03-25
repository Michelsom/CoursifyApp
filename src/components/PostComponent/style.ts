import styled from "styled-components/native";
import HTMLView from "react-native-htmlview";

export const Content = styled.TouchableOpacity`
  width: 235px;
  overflow: hidden;
  height: 325px;
  margin-left: 35px;
  margin-top: 28px;
  border: 0.6px solid #0000000f;
  border-radius: 12px;
`;
export const TextTitle = styled.Text`
  text-align: left;
  font-size: 16px;
  width: 100%;
  height: 60px;
  margin-top: 15px;
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 1;
`;
export const ImageMedia = styled.Image``;
export const RowToTexts = styled.View`
  flex-direction: column;
  padding: 0 9px;
  justify-content: space-between;
  align-items: center;
`;
export const ViewProducts = styled.View`
  width: 325px;
  height: 235px;
`;
export const HeadMore = styled.Text`
  text-align: left;
  font-size: 20px;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  opacity: 1;
`;
export const Description = styled(HTMLView)``;
