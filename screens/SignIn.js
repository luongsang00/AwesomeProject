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

const SignIn = () => {
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView style={styles.l}>
        <View style={styles.top}>
          <Text style={styles.texttop}>SignIn</Text>
        </View>

        <View style={styles.center}>
          <View>
            <Text style={styles.textcenter}>Your email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@email.com"
              keyboardType="email-address"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textcenter}>Your password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              keyboardType="visible-password"
            />
          </View>
          <View style={{ marginTop: 15, marginHorizontal: 170 }}>
            <Button title="Sign In" color={"#0000ff"} width="40" />
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
    flex: 1,
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  top: {
    backgroundColor: "#ff6347",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  texttop: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#ff6347",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 700,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ff6347",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 40,
  },

  textbottom: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  textcenter: {
    marginLeft: 20,
    color: "#a9a9a9",
  },
  l: {
    flex: 1,
    display: "flex",
  },
});
