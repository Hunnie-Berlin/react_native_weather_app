import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from "react-native";

const API_KEY = "00ae3bf7fdb0a35c20a8a6ea11c60f98";

class App extends React.Component {
  state = {
    isLoading: true,
    temp: null,
    condition: null,
    icon: null,
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude: lat, longitude: lon },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(lat, lon);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
      console.log(error);
    }
  };

  getWeather = async (lat, lon) => {
    try {
      const {
        data: {
          main: { temp },
          weather: [{ main: condition, icon }, ...rest],
        },
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        temp: temp,
        condition: condition,
        icon: icon,
      });
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
    const { isLoading, temp, condition, icon } = this.state;
    console.log(isLoading, temp, condition);
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} icon={icon} />
    );
  }
}

export default App;
