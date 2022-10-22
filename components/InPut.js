import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from "react";

const InPut = () => {
  return (
    <SafeAreaView>
      {/* <Text style={styles.input} placeholder="example@gmail.com"></Text> */}
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        onChangeText={(newText) => setText(newText)}
      />
    </SafeAreaView>
  );
};

export default InPut;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 40,
  },
});
