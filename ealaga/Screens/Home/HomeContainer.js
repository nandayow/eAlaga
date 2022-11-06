import { useCallback, useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "../../Shared/Color";
import Header from "../../Shared/Header";
import FunctionList from "../Home/FunctionList";

// Fething Data
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

import AuthGlobal from "../../Context/store/AuthGlobal";
import { useFocusEffect } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const HomeContainer = (props) => {
  const context = useContext(AuthGlobal);
  const [hours, setHours] = useState("");
  const [greeting, setGreeting] = useState("Good Morning!");
  const [username, setUserame] = useState("");

  useEffect(() => {
    var oras = new Date().getHours(); //Current Hours
    setHours(oras);

    if (hours < 12) {
      setGreeting("Good Morning!");
    } else if (hours > 12 && hours < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  }, [hours]);

  useFocusEffect(
    useCallback(() => {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        props.navigation.navigate("User");
      }
      setUserame(context.stateUser.user.username);
      return () => {
        setUserame();
      };
    }, [context.stateUser.isAuthenticated, username])
  );

  return (
    <SafeAreaProvider>
      <Header navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.username}>{username} </Text>
      </View>
      <FunctionList navigation={props.navigation} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: Colors.main,
  },
  greeting: {
    fontSize: 30,
    color: Colors.TextColor,
    fontWeight: "bold",
    marginTop: 10,
    font: 30,
  },
  username: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold 100",
    color: Colors.gray,
  },
});

export default HomeContainer;
