import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { TabBar } from "../components/TabBar";

import { Create } from "../screens/Create";
import { List } from "../screens/List";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="create" component={Create} />
        <Tab.Screen name="list" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
