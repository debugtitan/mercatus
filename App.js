import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OnboardingScreen,Profile } from "./app/screens";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MercatusBottomTabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Profile}/>
      <Tab.Screen name='Market' component={Profile}/>
      <Tab.Screen name='Learn' component={Profile}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  )
}
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}> 
        <Stack.Screen name="onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="skip" component={MercatusBottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
