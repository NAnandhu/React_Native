
// import React from "react";
// import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

// export default function ViewAll({ navigation, route }) {
//     const recipe = route.params?.recipe || {}; 

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.title}>View Items</Text>

//             <Text style={styles.label}>Item Name:</Text>
//             <Text style={styles.value}>{recipe.Itemname || "N/A"}</Text>

//             <Text style={styles.label}>Ingredients:</Text>
//             <Text style={styles.value}>{recipe.Incrediants || "N/A"}</Text>

//             <Text style={styles.label}>Recipe:</Text>
//             <Text style={styles.value}>{recipe.Recipes || "N/A"}</Text>

//             <View style={styles.btnContainer}>
//                 <Button title="Delete" color='red' onPress={() => console.log("Delete Pressed")}/>
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         alignItems: "center",
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },
//     label: {
//         fontSize: 18,
//         fontWeight: "bold",
//         marginTop: 10,
//     },
//     value: {
//         fontSize: 16,
//         marginBottom: 10,
//     },
//     btnContainer: {
//         marginTop: 20,
//         width: 150,
//     },
// });
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';

export default function ViewAll({ navigation, route }) {
    const [recipe, setRecipe] = useState(route.params?.recipe || {});

    useEffect(() => {
        if (!recipe || Object.keys(recipe).length === 0) {
            Alert.alert("Error", "No recipe data available.");
            navigation.goBack();
        }
    }, [recipe]);
    console.log(recipe.id);
    
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/recipes/${recipe.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                Alert.alert("Success", "Recipe deleted successfully!");
                navigation.navigate("ViewAll");
            } else {
                throw new Error("Failed to delete recipe");
            }
        } catch (error) {
            console.error("Delete Error:", error);
            Alert.alert("Error", "Failed to delete recipe. Please try again.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>View Items</Text>

            <Text style={styles.label}>Item Name:</Text>
            <Text style={styles.value}>{recipe.Itemname || "N/A"}</Text>

            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.value}>{recipe.Incrediants || "N/A"}</Text>

            <Text style={styles.label}>Recipe:</Text>
            <Text style={styles.value}>{recipe.Recipe || "N/A"}</Text>

            <View style={styles.btnContainer}>
                <Button title="Delete" color='red' onPress={handleDelete} />
            </View>
            <View style={styles.btnContainer}>
                <Button title="Back" color='blue' onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 20,
        width: 150,
    },
});
