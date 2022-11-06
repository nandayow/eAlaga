import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Colors from "./Color";

const NormalHeader = (props) => {
  const goHome = () => {
    props.navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => goHome()}>
        <Image
          source={require("../assets/ealaga.png")}
          resizeMode="contain"
          style={{ height: 60 }}
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
});

export default NormalHeader;
