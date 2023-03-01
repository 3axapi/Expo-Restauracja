import { useEffect, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from '../components/MealItem';

function MealsOverviewScreen (props) {
    const id = props.route.params.categoryId;
    const displayMeals = MEALS.filter((meatItem) => {
        return meatItem.categoryIds.indexOf(id) >= 0;
    });

    useLayoutEffect(() => { // useEffect
        const categoryTitle = CATEGORIES.find(category => { //ma znaleźć odpowiedni element
            return category.id === id
        }).title; // !

        props.navigation.setOptions({
            title: categoryTitle
        })
    },
    [id, props.navigation]
    );

    function renderMealItem(itemData) {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }

        return <MealItem {...mealItemProps} />
    }

    return(
        <View>
            <FlatList data={displayMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen;