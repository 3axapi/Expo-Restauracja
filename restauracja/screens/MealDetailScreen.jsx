import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View>
            <Image
            <MealDetails 
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
            />
        </View>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({

})