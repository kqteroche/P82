import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard";
import AppLoading from "expo-app-loading";
import { FlatList } from "react-native-gesture-handler";

let posts = require("./temp_posts.json");

export default class Feed extends Component {
  renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Spectagram</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data = {posts}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(22)
  },
  appTitle: {
    flex: 0.2,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.9,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(35),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 1
  }
});
