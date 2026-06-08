import { HankenGrotesk_400Regular } from '@expo-google-fonts/hanken-grotesk';
import { Sora_400Regular, Sora_700Bold, useFonts } from '@expo-google-fonts/sora';
import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { Bell, LocateFixed, MapPin, Search } from 'lucide-react-native';
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PriceCard } from "../../components/PriceCard";
import { styles, theme } from '../../styles/global';

export default function HomeScreen() {
    const [isFocused, setIsFocused] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const router = useRouter();
    
    const [loaded, error] = useFonts({
        Sora_400Regular,
        Sora_700Bold,
        HankenGrotesk_400Regular,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#BBFFE2', flex: 1}}>

            <View style={styles.glassNav}>
                <MapPin color={theme.colors.primary} />
                <Text style={styles.brandName}>PouchPrice</Text>
                <Bell color={theme.colors.primary} />
            </View>
            
            <ScrollView style={styles.container}>

                <View style={[styles.inputWrapper, isFocused && styles.inputWrapperFocused]}>
                    <Search style={styles.inputIcon} />
                    <TextInput style={styles.input} placeholderTextColor={theme.colors.secondary} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} placeholder="Search brands, flavors, or retailers" />
                </View>

                <View style={styles.emptyStateTitle} />

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.lg}}>
                    <LocateFixed size={20} style={{color: theme.colors.secondary, marginRight: 5}}/>
                    <Text style={styles.labelCaps}>CURRENT AREA: SOUTHLAKE (2 MILES)</Text>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.headlineLg}>Best Value Near You</Text>
                </View>

                <PriceCard
                    onPress={() => router.push('/storeInfo')}
                    storeName="7-Eleven"
                    price="3.99"
                    bestPrice={true}
                    distance="0.5"
                    hours="24/7"
                    productName="ZYN Peppermint"
                    strength="6MG"
                    amount="15 POUCHES"
                    accentColor={theme.colors.tertiaryContainer}
                />

                <PriceCard
                    storeName="QuikTrip"
                    price="4.29"
                    bestPrice={false}
                    distance="2.3"
                    hours="10:00PM"
                    productName="VELO Wintergreen"
                    strength="9MG"
                    amount="20 POUCHES"
                    accentColor={theme.colors.primaryContainer}
                    image={require('../../../assets/images/velo.webp')}
                />

            </ScrollView>
        </SafeAreaView>
    );
}