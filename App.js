import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
      {/* <SignUp /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
