
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Alert } from 'react-native';
// import bg from '../Images/Hp2.jpeg';

// export default function Add({ navigation }) {
//     const [itemName, setItemName] = useState('');
//     const [ingredients, setIngredients] = useState('');
//     const [recipe, setRecipe] = useState('');

//     const addRecipe = async () => {
//         if (!itemName || !ingredients || !recipe) {
//             Alert.alert("Error", "All fields are required!");
//             return;
//         }

//         const requestData = {
//             ItemName: itemName,
//             Ingredients: ingredients,
//             Recipes: recipe,
//         };

//         try {
//             const response = await fetch('http://127.0.0.1:8000/addRecipe', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(requestData),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 Alert.alert("Success", "Recipe Added Successfully!");
                
//                 // Navigate to ViewAll and trigger refresh
//                 navigation.navigate("ViewAll", { refresh: true });
//             } else {
//                 Alert.alert("Error", result.message || "Something went wrong");
//             }

//         } catch (error) {
//             console.error("Error:", error);
//             Alert.alert("Error", "Failed to connect to the server");
//         }
//     };

//     return (
//         <ImageBackground source={bg} style={styles.background}>
//             <View style={styles.container}>
//                 <View style={styles.addContainer}>
//                     <Text style={styles.title}>
//                         <Text style={{ color: 'red' }}>A</Text>dd <Text style={{ color: 'red' }}>R</Text>ecipe
//                     </Text>

//                     <Text style={styles.subheading}>Item Name</Text>
//                     <TextInput 
//                         style={styles.input} 
//                         placeholder='Enter Your Item Name' 
//                         value={itemName} 
//                         onChangeText={setItemName} 
//                     />

//                     <Text style={styles.subheading}>Ingredients</Text>
//                     <TextInput 
//                         style={styles.input} 
//                         placeholder='Enter The Ingredients' 
//                         value={ingredients} 
//                         onChangeText={setIngredients} 
//                     />

//                     <Text style={styles.subheading}>Recipe</Text>
//                     <TextInput 
//                         style={styles.input} 
//                         placeholder='Enter the Recipe' 
//                         value={recipe} 
//                         onChangeText={setRecipe} 
//                     />

//                     <View style={styles.buttoncontainer}>
//                         <Button title='Add' color='red' onPress={addRecipe} />
//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//     },
//     background: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 30,
//         textAlign: 'center',
//         padding: 10,
//         color: 'black',
//     },
//     addContainer: {
//         width: 300,
//         height: 500,
//         borderWidth: 1,
//         borderColor: 'gray',
//         padding: 20,
//         borderRadius: 15,
//     },
//     subheading: {
//         fontSize: 20,
//         padding: 10,
//         color: 'black',
//     },
//     input: {
//         width: 250,
//         height: 40,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: 'gray',
//         marginBottom: 15,
//     },
//     buttoncontainer: {
//         alignItems: 'center',
//         width: 250,
//         padding: 10,
//         borderRadius: 15,
//     },
// });
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Alert } from 'react-native';
import bg from '../Images/Hp2.jpeg';

export default function Add({ navigation }) {
    const [itemName, setItemName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');

    const addRecipe = async () => {
        if (!itemName || !ingredients || !recipe) {
            Alert.alert("Error", "All fields are required!");
            return;
        }

        const requestData = {
            Itemname: itemName,  
            Incrediants: ingredients,
            Recipe: recipe,
        };

        try {
            const response = await fetch('http://127.0.0.1:3000/recipes/add', { // Updated backend route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            const result = await response.json();
            if (response.ok) {
                Alert.alert("Success", "Recipe Added Successfully!");
                
                // Navigate to ViewAll and trigger refresh
                navigation.navigate("ViewAll", { refresh: true });
                
                // Clear form inputs
                setItemName('');
                setIngredients('');
                setRecipe('');
            } else {
                Alert.alert("Error", result.message || "Something went wrong");
            }

        } catch (error) {
            console.error("Error:", error);
            Alert.alert("Error", "Failed to connect to the server");
        }
    };

    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.addContainer}>
                    <Text style={styles.title}>
                        <Text style={{ color: 'red' }}>A</Text>dd <Text style={{ color: 'red' }}>R</Text>ecipe
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
                        <Button title='Add' color='red' onPress={addRecipe} />
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
        backgroundColor: "#fff",
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
        borderRadius: 15,
    },
});



