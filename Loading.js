import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.text}>Loading{"\n"}the Weather</Text>
    </View>
    <ActivityIndicator color="#4b6584" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 100,
    backgroundColor: "#fed330e0",
  },
  card: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#4b6584",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 0,
    shadowOpacity: 1,
    elevation: 5,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    color: "#4b6584",
    fontSize: 30,
    fontWeight: "900",
    paddingVertical: 50,
  },
});

export default Loading;
