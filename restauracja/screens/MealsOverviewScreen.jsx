import { Text, View, StyleSheet, FlatList} from 'react-native';
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from '../components/MealItem';

function MealsOverviewScreen (props) {
    const id = props.route.params.categoryId;
    const displayMeals = MEALS.filter((meatItem) => {
        return meatItem.categoryIds.indexOf(id) >= 0;
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />
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