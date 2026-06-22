import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import { Tabs } from "expo-router";
import { useEffect, useState, createContext } from 'react';
import { theme } from "../../styles/global";

type Coord = {
    lat: number;
    lng: number;
};

export const LocationContext = createContext<any>(null);
export const CoordsContext = createContext<Coord | null>(null);

export default function TabLayout() {
    const [errorMsg, setErrorMsg] = useState('');
    const [location, setLocation] = useState<any>(null);
    const [coords, setCoords] = useState<Coord | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let { coords } = await Location.getCurrentPositionAsync({});
            let { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({latitude, longitude});
            setLocation(response.at(0));
            setCoords({lat: latitude, lng: longitude});
        }

        getCurrentLocation();
    }, []);

    return (
        <LocationContext value={location}>
            <CoordsContext value={coords}>
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
            </CoordsContext>
        </LocationContext>
    )
}