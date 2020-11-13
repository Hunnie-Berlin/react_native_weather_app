import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from "react-native";

const API_KEY = "00ae3bf7fdb0a35c20a8a6ea11c60f98";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  s;

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude: lat, longitude: lon },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(lat, lon);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
      console.log(error);
    }
  };

  getWeather = async (lat, lon) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      console.log(data);
    } catch (error) {
      console.log("I have a problem");
      console.log(error);
    }
  };

  componentDidMount() {
    this.getLocation();
    this.getWeather();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

export default App;
