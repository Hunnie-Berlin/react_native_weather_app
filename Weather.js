import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Weather = ({ temp, condition, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {temp}℃{condition}
        {icon}
      </Text>
    </View>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fa8231",
  },
  text: {
    fontSize: 24,
    color: "black",
  },
});

export default Weather;
