import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { actuatedNormalize } from "../../utils/font-size";
export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #fff;
`;
export const Box = styled.View``;

export const Content = styled.View`
  height: 100%;
`;
export const TextTitle = styled.Text`
  color: red;
`;

export const ContainerFilter = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  justify-content: space-between;

  align-items: center;
`;
export const TextFilter = styled.Text`
  font-size: 17px;
  color: #535353;
`;
export const ListFilter = styled.TouchableOpacity`
  width: 120px;
  height: 46px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
`;

export const IconsArrow = styled(Feather)`
  font-size: ${actuatedNormalize(20)}px;
  color: #686868;
`;

export const GlobalActivityIndicator = styled.ActivityIndicator.attrs({
  size: 50,
})`
  color: #2ab598;
`;
export const GlobalStyleActivityIndicator = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const ViewBottom = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 219px;
  margin-top: 10px;
  background: #2ab598;
`;
export const TextDescription = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  opacity: 1;
`;

export const ButtonNavigateFromWebSite = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 19px 25px;
  border-radius: 19px;
  background-color: #ffa900;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: 17px;
  color: #ffffff;
`;
