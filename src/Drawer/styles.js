import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Button = styled.TouchableOpacity`
  background-color: transparent;
  border-radius: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const AvatarView = styled.View`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const NameText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const EmailText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

export const DrawerView = styled.View``;

export const AnimatedStack = styled(Animated.View)`
  flex: 1;
`;

export const ViewLogout = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 30px;
`;

export const View4 = styled.View``;
