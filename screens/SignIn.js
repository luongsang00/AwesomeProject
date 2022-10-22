import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import topSignIn from "../components/topSignIn";

const SignIn = () => {
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView style={styles.l}>
        <View style={styles.top}>
          <Text style={styles.texttop}>SignIn</Text>
        </View>

        <View style={styles.center}>
          <View>
            <Text style={styles.marginleft}>Your email</Text>
            <TextInput style={styles.input} placeholder="abc@gmail.com" />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.marginleft}>Your password</Text>
            <TextInput style={styles.input} placeholder="******" />
          </View>
          <View style={{ marginTop: 5, marginHorizontal: 100 }}>
            <Button style={styles.button} title="Sign In" width="40" />
          </View>
          <View>
            <Text style={styles.textbottom}>For got your password</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  main: {
    // display: "flex",
    // flexDirection: "row",
    flex: 1,
    backgroundColor: "#f5f5f5",
    // width: 450,
  },
  top: {
    flex: 1,
    // backgroundColor: "#ff6347",
    height: 40,
  },
  texttop: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#ff6347",
    color: "#ffffff",
  },
  center: {
    flex: 3,
    // backgroundColor: "#ffefd5",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 40,
  },

  button: {
    width: 40,
    color: "#841584",
  },
  textbottom: {
    marginTop: 5,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  marginleft: {
    marginLeft: 20,
  },
  l: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: 450,
  },
});
