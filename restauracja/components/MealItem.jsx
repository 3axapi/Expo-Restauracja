import React, { Text, View, Pressable, Image} from "react-native"

function MealItem(props) {
    return (
        <View>
            <Text> {props.title} </Text>
        </View>
    )
}

export default MealItem