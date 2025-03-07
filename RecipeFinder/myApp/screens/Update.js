
import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    ImageBackground, 
    Alert 
} from 'react-native';
import bg from '../Images/Hp2.jpeg';

export default function Update({ navigation, route }) {
    const recipeData = route.params?.recipe || {}; 

    const [itemName, setItemName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState("");
    console.log(recipe);
    

    useEffect(() => {
        setItemName(recipeData.Itemname || "");
        setIngredients(recipeData.Incrediants || "");
        setRecipe(recipeData.Recipes || "");
    }, [recipeData]); 

    const handleUpdate = async () => {
        if (!itemName.trim() || !ingredients.trim() || !recipe.trim()) {
            Alert.alert("Input Required", "Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:3000/recipes/${recipeData.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    itemName,
                    ingredients,
                    recipe
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                Alert.alert("Success", "Recipe updated successfully!");
                navigation.navigate("ViewAll");
            } else {
                Alert.alert("Error", data.message || "Failed to update the recipe.");
            }
        } catch (error) {
            console.error("Update Error:", error);
            Alert.alert("Error", "Something went wrong. Please try again.");
        }
    };
    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.addContainer}>
                    <Text style={styles.title}>
                        <Text style={{color:'red'}}>U</Text>p<Text style={{color:'red'}}>d</Text>ate
                    </Text>

                    <Text style={styles.subheading}>Item Name</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter Your Item Name'
                        value={itemName}
                        onChangeText={setItemName}
                    />

                    <Text style={styles.subheading}>Ingredients</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter The Ingredients' 
                        value={ingredients}
                        onChangeText={setIngredients}
                    />

                    <Text style={styles.subheading}>Recipe</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter the Recipe' 
                        value={recipe}
                        onChangeText={setRecipe}
                    />

                    <View style={styles.buttoncontainer}>
                        <Button title='Update' color='red' onPress={handleUpdate} />
                    </View>
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
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
        color: 'black',
    },
    addContainer: {
        width: 300,
        height: 500,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    subheading: {
        fontSize: 20,
        padding: 10,
        color: 'black',
    },
    input: {
        width: 250,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 15,
    },
    buttoncontainer: {
        alignItems: 'center',
        width: 250,
        padding: 10,
    },
});