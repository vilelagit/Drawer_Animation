import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Button,
  AvatarView,
  Avatar,
  NameText,
  EmailText,
  DrawerView,
  ViewLogout,
} from "./styles";

import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import Dashboard from "../screens/Dashboard";
import Messages from "../screens/Messages";
import Contact from "../screens/Contact";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: null,
          headerTitleStyle: {
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: "#fff",

          headerTitleAlign: "center",
          headerTransparent: true,
          headerLeft: () => (
            <Button onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={20} color="#fff" />
            </Button>
          ),
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <Container>
        <AvatarView>
          <Avatar source={require("../../assets/avatar.jpg")} />
          <NameText>Teste</NameText>
          <EmailText>email@email.com</EmailText>
        </AvatarView>

        <DrawerView>
          <DrawerItem
            label="Dashboard"
            labelStyle={{ color: "white", marginLeft: -16 }}
            onPress={() => props.navigation.navigate("Dashboard")}
            icon={() => <AntDesign name="dashboard" size={16} color="white" />}
          />
          <DrawerItem
            label="Messages"
            labelStyle={{ color: "white", marginLeft: -16 }}
            onPress={() => props.navigation.navigate("Messages")}
            icon={() => <AntDesign name="message1" size={16} color="white" />}
          />
          <DrawerItem
            label="Contact"
            labelStyle={{ color: "white", marginLeft: -16 }}
            onPress={() => props.navigation.navigate("Contact")}
            icon={() => <AntDesign name="phone" size={16} color="white" />}
          />
        </DrawerView>
        <ViewLogout>
          <DrawerItem
            label="Logout"
            labelStyle={{ color: "white", marginLeft: -16 }}
            onPress={() => alert("Exit")}
            icon={() => <AntDesign name="logout" size={16} color="white" />}
          />
        </ViewLogout>
      </Container>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const screenStyles = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#121212", "#00CED1"]}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Dashboard"
        drawerStyle={{ width: "50%", backgroundColor: "transparent" }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "green",
          inactiveTintColor: "green",
        }}
        useNativeDriver
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={screenStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
