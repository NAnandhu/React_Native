
import React, { useEffect, useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    Image, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform,
    Alert
} from 'react-native';

import ch from '../Images/Ch2.jpg';

export default function ViewAll({ navigation }) {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchRecipes = async () => {
        try {
            const response = await fetch("http://127.0.0.1:3000/recipes/all"); 
            console.log(response);
            
            if (!response.ok) throw new Error("Failed to fetch recipes");
            
            const data = await response.json();
            console.log(data); 
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            Alert.alert("Error", "Failed to fetch recipes. Please try again.");
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const searchRecipe = async () => {
        if (!searchQuery.trim()) {
            Alert.alert("Input Required", "Please enter a recipe name to search.");
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:3000/recipes/${searchQuery}`);
            if (!response.ok) throw new Error("Recipe not found");
        console.log(response);
        
            const data = await response.json();
            console.log(data);   
            setRecipes(Array.isArray(data) ? data : [data]);          
        } catch (error) {
            console.error("Error searching recipe:", error);
            Alert.alert("Error", "No matching recipes found.");
            setRecipes([]);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <ScrollView 
                    style={{ flex: 1 }} 
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Search Recipe"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    
                    <View style={styles.Searchbtn}>
                        <Button title="Search" color="red" onPress={searchRecipe} />
                    </View>

                    {recipes.length > 0 ? (
                        recipes.map((recipe, index) => (
                            <View key={index} style={styles.recipeCard}>
                                <Image source={ch} style={styles.img} />
                                <Text style={styles.recipeTitle}> {recipe.Itemname}</Text>
                                <Text style={styles.recipeText}> Ingredients: {recipe.Incrediants}</Text>
                                <Text style={styles.recipeText}> Recipe: {recipe.Recipe}</Text>
                                <View style={styles.btn}>
                                    <Button 
                                        title="View" 
                                        color="red" 
                                        onPress={() => navigation.navigate("View", { recipe })} 
                                    />
                                </View>
                                <View style={styles.btn}>
                                    <Button 
                                        title="Update" 
                                        color="red" 
                                        onPress={() => navigation.navigate("Update", { recipe })} 
                                    />
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noRecipes}> No recipes found</Text>
                    )}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        alignItems: "center",
        paddingVertical: 20,
    },
    Searchbtn: {
        width: 150,
        padding: 15,
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
    },
    btn: {
        width: 150,
        padding: 10,
    },
    img: {
        width: 200,
        height: 100,
    },
    recipeCard: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 15,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#f9f9f9",
        width: "90%", 
    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#d9534f",
    },
    recipeText: {
        fontSize: 16,
        marginBottom: 5,
    },
    noRecipes: {
        fontSize: 18,
        color: "gray",
        textAlign: "center",
        marginTop: 20,
    },
});

