import styled from "styled-components/native";

export const Content = styled.View``;
export const TextTitle = styled.Text`
  text-align: left;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 1;
`;

export const RowToTexts = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;
export const ViewProducts = styled.View`
  width: 325px;
  height: 235px;
`;

export const TextSeeMore = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 17px;

`;
