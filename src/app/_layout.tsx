import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Sora_700Bold, Sora_600SemiBold, Sora_400Regular } from "@expo-google-fonts/sora";
import { HankenGrotesk_400Regular, HankenGrotesk_700Bold, HankenGrotesk_600SemiBold } from "@expo-google-fonts/hanken-grotesk";
import { useEffect } from "react";
import { styles, theme } from "../styles/global";

export default function RootLayout() {
    const [loaded, error] = useFonts({
        'Sora-Regular': Sora_400Regular,
        'Sora-SemiBold': Sora_600SemiBold,
        'Sora-Bold': Sora_700Bold,
        "HankenGrotesk-Regular": HankenGrotesk_400Regular,
        "HankenGrotesk-SemiBold": HankenGrotesk_600SemiBold,
        "HankenGrotesk-Bold": HankenGrotesk_700Bold,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null
    };

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}
