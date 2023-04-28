import { Text, View } from "react-native";
import SignIn from "./screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsCard from "./components/NewsCard";

const App = () =>{
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="SignIn"
        >
          {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
          /> */}
          <Stack.Screen
          name="Development Screen"
          component={NewsCard}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
