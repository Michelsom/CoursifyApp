import styled from "styled-components/native";

export const ViewBottom = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 219px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.primaryColor};
`;
export const TextDescription = styled.Text`
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightColor};
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  opacity: 1;
`;

export const ButtonNavigateFromWebSite = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 19px 25px;
  border-radius: 19px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  text-align: center;
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  color: ${({ theme }) => theme.colors.lightColor};
`;
