import { Text, View } from "react-native";
import SignIn from "./screens/SignIn";
import ModalCard from "./components/ModalCard";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsCard from "./components/NewsCard";
import Tempscreen from "./components/Tempscreen";
import DropdownList from "./components/Dropdown";
import { MenuProvider } from "react-native-popup-menu";

const App = () =>{
  const Stack = createStackNavigator();

  return(
    <MenuProvider>
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="SignIn"
        >
          {/* <Stack.Screen
          name="Test Screen"
          component={SignIn}
          options={{headerShown: false}}
          /> */}
          <Stack.Screen
          name="Test Screen"
          component={Tempscreen}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </MenuProvider>
  );
}

export default App;
