import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import DummyComponent from './DummyComponent';

// https://reactnavigation.org/
// npm install react-native-reanimated@1 --save --save-exact #zmieniamy na jedynkę
// npm install @react-navigation/drawer

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  return ( // nie używamy NavigationContainer, ponieważ już jest używany w funkcję App
    <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} />
      <Drawer.Screen name="Dummy" component={DummyComponent} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: '#3f2f5'},
            headerStyle: {backgroundColor: "#991410"},
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen name="DrawerScreen" component={DrawerNavigator}
          // name="MealsCategories"
          //component={CategoriesScreen}
          // options={{
          //   title:"trololololo" //default is better
          // }}
          />
          <Stack.Screen name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen name="MealDetails"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});