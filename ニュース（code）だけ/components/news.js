import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const News = ({ subText, ImageUrl, title }) => {
  return (
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <View style={styles.gazoBox}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: ImageUrl }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },

  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  },

  text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "red",
  },
});
export default News;
