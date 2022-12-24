import { BText } from "@components";
import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export const Loading = () => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#fff",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./Animations/Loader-Blod.json")}
      />
      <BText color="secondary" size="large">
        Cargando...
      </BText>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});