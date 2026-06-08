import { styles, theme } from "../../styles/global";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: theme.colors.background,
                borderTopColor: theme.colors.outline,
            },
            tabBarActiveTintColor: theme.colors.inversePrimary,
            tabBarInactiveTintColor: theme.colors.secondary,
        }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="contribute"
                options={{
                    title: 'Contribute',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}