import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.JQKOILKC}>{"Username"}</Text>
        <TextInput style={styles.SEFSGqCJ}></TextInput>
        <Text style={styles.STHnIono}>{"Password"}</Text>
        <TextInput style={styles.qPsiuHbc}></TextInput>

        <Pressable onPress={() => {
        navigation.navigate("AboutTheAppScreen", {});
      }}>
          <View style={styles.XgaVnvrP}>
            <Text style={styles.AyVsnhGR}>{"Sign In"}</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  JQKOILKC: {
    width: 70,
    height: 24,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 87,
    top: 182
  },
  SEFSGqCJ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 20,
    position: "absolute",
    left: 187,
    top: 180
  },
  STHnIono: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 82,
    top: 234
  },
  qPsiuHbc: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 23,
    position: "absolute",
    left: 188,
    top: 232
  },
  iDSeEgma: {
    width: 73,
    height: 30,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 113,
    top: 315
  },
  XgaVnvrP: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 78,
    top: 346
  },
  AyVsnhGR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Login;