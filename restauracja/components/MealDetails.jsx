import { View, Text, StyleSheet } from "react-native";

function MealDetails (props) {

    return (
        <View style={styles.details}>
            <Text style={styles.detailsItem}> {props.duration} </Text>
            <Text style={styles.detailsItem}> {props.complexity.toUpperCase()} </Text>
            <Text style={styles.detailsItem}> {props.affordability.toUpperCase()} </Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
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