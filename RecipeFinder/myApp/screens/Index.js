import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ImageBackground } from 'react-native-web';
import bg from '../Images/Hp2.jpeg';

export default function Index({ navigation }) {
  return (
    <ImageBackground
    source={bg}  
    style={styles.background} >
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={styles.highlight}>F</Text>ind <Text style={styles.highlight}>Y</Text>ou{" "}
          <Text style={styles.highlight}>R</Text>ecipe
        </Text>
        <Text style={styles.subtitle}>Find Your Taste</Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" color="red" onPress={() => navigation.navigate("Home")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center",
  },
  highlight: {
    color: "red",
  },
  subtitle: {
    color: "red",
    fontSize: 30,
    padding: 15,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
});
