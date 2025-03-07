import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import bg from '../Images/Hp2.jpeg';
export default function Home({ navigation }) {
  return (
    <ImageBackground source={bg}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titles}>Welcome To Cook Book</Text>
        <Text style={styles.title}>Find Your Recipe</Text>
        <Text style={styles.title}>Find Your Taste</Text>
        <View style={styles.buttonContainer}>
          <Button title='Add Recipe' color="red" onPress={() => navigation.navigate("Add")} />
        </View>
        <View style={styles.buttoncontainer}>
       <Button title='View' color='red'  onPress={() => navigation.navigate("ViewAll")}/>
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
  titles: {
    fontSize: 40,
    textAlign: 'center',
    padding: 15,
    fontFamily: "KaushanScript",
    paddingBlock: 50,
    color: 'black',
  },
  title: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    color: 'black',
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
  buttoncontainer: {
    alignItems: 'center',
    width: 250,
    padding: 10,
    borderRadius: 15,
  }
});
