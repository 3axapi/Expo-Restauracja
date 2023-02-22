import {Text, View, FlatList, StyleSheet} from 'react-native';
import { CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from '../components/CategoryGridTitle';



function CategoriesScreen(props){

    function renderCategoryItem(itemData){
        return <CategoryGridTitle title={itemData.item.title}
                                  color={itemData.item.color}
                                  whenPressExecute={ () => {
                                    props.navigation.navigate("MealsOverview",
                                    {categoryId: itemData.item.id})
                                  }}
        />
    }

    return(
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;