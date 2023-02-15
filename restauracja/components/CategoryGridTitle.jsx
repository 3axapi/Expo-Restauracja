import { View, Text, StyleSheet, Pressable, Platform } from "react-native"

function CategoriesGridTitle( {color, title} ) {

    

    return (
        <View style={styles.outerView}>
            <Pressable android_ripple={{color: "#ccc"}}
                style={ (pressed) => {
                    [styles.pressableView, pressed ? styles.pressedButton : null]
                }}
            >
                <View style={
                    [styles.innerView, {backgroundColor: color}]
                }>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoriesGridTitle

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 6,
        borderRadius: 18,
        //poniższa część kodu daje efekt elevation dla iOS i web
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" ? "visible"
    },

    pressableView: {
        flex: 1
        
    },

    pressedButton: {
        opacity:
    },

    innerView: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        borderRadius: 18
    },

    title: {
        fontWeight: "bold"
    }
})