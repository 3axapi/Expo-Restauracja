import React, { Text, View, StyleSheet, FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoriesGridTitle from "../components/CategoryGridTitle"

function renderCategoryItem(itemData) {
    return (
        <CategoriesGridTitle
            id={itemData.item.id}
            title={itemData.item.title}
            color={itemData.item.color}
        />
    )
}

function CategoriesScreen() {
    return (
        <View style={styles.main}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#444',
      borderWidth: 'medium'
    }
  })