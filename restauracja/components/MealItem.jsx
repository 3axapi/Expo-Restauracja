import React, { Text, View, Pressable, Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem (props) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate("MealDetails", {
            mealId: props.id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler}>
                <Image source={{uri: props.imageUrl}} style={styles.image}/>
                <Text style={styles.title}> {props.title} </Text>
                <MealDetails 
                    duration={props.duration}
                    affordability={props.affordability}
                    complexity={props.complexity}
                />
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },

    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,

        shadowColor: 'black',
        shadowOffset: {width: 3, height: 7},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },

    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})