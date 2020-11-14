import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherSet = {
  sunny: {
    bg: ["#45aaf2", "#45aaf2", "#d1d8e0"],
    quote: `Oh, Sunlight!${"\n"}The most precious gold to be found on Earth. ${"\n"} - Roman Payne`,
  },
  partlySunny: {
    bg: ["#45aaf2", "#45aaf2", "#4b6584"],
    quote: `Sunny days are warm in spring and summer.${"\n"}Sunny days are cool in fall and winter. ${"\n"} - Martha Rustad`,
  },
  cloudy: {
    bg: ["#45aaf2", "#778ca3", "#4b6584"],
    quote: `There’s a bright spot in every dark cloud.  ${"\n"}- Bruce Beresford`,
  },
  rainny: {
    bg: ["#4b6584", "#778ca3", "#4b6584"],
    quote: `A rainy day is an equalizer.${"\n"} You don't know what's going to happen.${"\n"} You just take what you can get. ${"\n"}- Charlie Harvey`,
  },
  thunder: {
    bg: ["#4b6584", "#4b6584", "#4b6584", "#778ca3"],
    quote: `Sunny days give us happiness; ${"\n"}stormy days give us wisdom.${"\n"} - Mehmet Murat ildan`,
  },
  snow: {
    bg: ["#778ca3", "#d1d8e0"],
    quote: `Snowmen fall from heaven${"\n"}....... ${"\n"}unassembled. ${"\n"} - unknown`,
  },
  etc: {
    bg: ["#a5b1c2", "#3867d6"],
    quote: `Wherever you go, no matter what the weather,${"\n"} always bring your own sunshine. ${"\n"}- Anthony J. D'Angelo`,
  },
};

const Weather = ({ temp, condition, icon }) => {
  return (
    <LinearGradient
      colors={
        icon.slice(0, 2) === "01"
          ? weatherSet.sunny.bg
          : icon.slice(0, 2) === "02"
          ? weatherSet.partlySunny.bg
          : icon.slice(0, 2) === "03" || icon.slice(0, 2) === "04"
          ? weatherSet.cloudy.bg
          : icon.slice(0, 2) === "09" || icon.slice(0, 2) === "10"
          ? weatherSet.rainny.bg
          : icon.slice(0, 2) === "11"
          ? weatherSet.thunder.bg
          : icon.slice(0, 2) === "13"
          ? weatherSet.snow.bg
          : weatherSet.etc.bg
      }
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainerFirst}>
        <Text style={styles.condition}>{condition}</Text>
        <Text>
          {icon.slice(0, 2) === "01" ? (
            <MaterialCommunityIcons name="weather-sunny" style={styles.icon} />
          ) : icon.slice(0, 2) === "02" ? (
            <Ionicons name="ios-partly-sunny" style={styles.icon} />
          ) : icon.slice(0, 2) === "03" || icon.slice(0, 2) === "04" ? (
            <MaterialIcons name="wb-cloudy" style={styles.icon} />
          ) : icon.slice(0, 2) === "09" || icon.slice(0, 2) === "10" ? (
            <Ionicons name="ios-rainy" style={styles.icon} />
          ) : icon.slice(0, 2) === "11" ? (
            <Ionicons name="ios-thunderstorm" style={styles.icon} />
          ) : icon.slice(0, 2) === "13" ? (
            <Ionicons name="md-snow" style={styles.icon} />
          ) : (
            <MaterialIcons name="dehaze" style={styles.icon} />
          )}
        </Text>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainerSecond}>
        <Text style={styles.saying}>
          {icon.slice(0, 2) === "01"
            ? `${weatherSet.sunny.quote}`
            : icon.slice(0, 2) === "02"
            ? `${weatherSet.partlySunny.quote}`
            : icon.slice(0, 2) === "03" || icon.slice(0, 2) === "04"
            ? `${weatherSet.cloudy.quote}`
            : icon.slice(0, 2) === "09" || icon.slice(0, 2) === "10"
            ? `${weatherSet.rainny.quote}`
            : icon.slice(0, 2) === "11"
            ? `${weatherSet.thunder.quote}`
            : icon.slice(0, 2) === "13"
            ? `${weatherSet.snow.quote}`
            : `${weatherSet.etc.quote}`}
        </Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
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
  },
  halfContainerFirst: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 80,
  },
  halfContainerSecond: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 200,
    color: "white",
  },
  temp: {
    fontSize: 30,
    fontWeight: "700",
    color: "white",
  },
  condition: {
    fontSize: 30,
    fontWeight: "200",
    color: "white",
  },
  saying: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    lineHeight: 30,
    textAlign: "right",
  },
});

export default Weather;
