import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Colors from "./Color";

const Header = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
        <Image
          source={require("../assets/ealaga.png")}
          resizeMode="contain"
          style={{ height: 60 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Image
          source={require("../assets/avatar.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 20,
    borderBottomWidth: 3,
    backgroundColor: Colors.rose,
    borderBottomColor: Colors.rose_300,
    shadowOpacity: 2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {
    height: 30,
    width: 30,
    position: "absolute",
    right: 10,
    bottom: 15,
    backgroundColor: Colors.rose_300,
    borderRadius: 20,
  },
  touchableOpacity: {
    position: "absolute",
    right: 10,
    bottom: 1,
  },
});

export default Header;
