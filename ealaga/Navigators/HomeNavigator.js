import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeContainer from "../Screens/Home/HomeContainer";
import ServicesContainer from "../Screens/Services/ServicesContainer";
import HistoryContainer from "../Screens/History/HistoryContainer";
import DonationsContainer from "../Screens/Donations/DonationsContainer";
import ActivitiesContainer from "../Screens/Activities/ActivitiesContainer";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Services"
        component={ServicesContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="History"
        component={HistoryContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Donations"
        component={DonationsContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Activities"
        component={ActivitiesContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
