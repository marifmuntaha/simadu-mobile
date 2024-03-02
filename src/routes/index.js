import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import GreetingScreen from "../screens/GreetingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GreetingScreen" component={GreetingScreen} options={{
                    headerShown: false,
                    statusBarTranslucent: true
                }}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
                    headerShown: false,
                    statusBarTranslucent: true
                }}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                    headerShown: false,
                    statusBarTranslucent: true
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes