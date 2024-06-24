import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";


const Drawer = createDrawerNavigator();
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
            <Drawer.Screen name='SignIn' component={SignIn} options={{ headerShown: false,}} />
              <Drawer.Screen name='SignUp' component={SignUp} options={{ headerShown: false, }} />
              <Drawer.Screen name='Home' component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
      );
}