import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
      console.log(latitude, longitude);
      // Send to API and get the weather
    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
      console.log(error);
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

export default App;
