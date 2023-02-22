import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

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
            <Stack.Screen name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title:"trololololo" //default is better
            }}
            />
            <Stack.Screen name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title:"lalalalalalala" //default is better
            }}
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
