import * as Location from 'expo-location';
import { Bell, LocateFixed, MapPin, Search } from 'lucide-react-native';
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PriceCard } from "../../components/PriceCard";
import { styles, theme } from '../../styles/global';

export default function HomeScreen() {
    const [isFocused, setIsFocused] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [location, setLocation] = useState<any>();
    const [latitude, setLatitude] = useState<any>();
    const [longitude, setLongitude] = useState<any>();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [stores, setStores] = useState<any[]>([]);

    const backend = 'https://pouchpricebackend-production.up.railway.app';

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
            console.log(response);
            setLocation(response.at(0));
            setLatitude(latitude);
            setLongitude(longitude);
        }

        getCurrentLocation();
    }, []);

    useEffect(() => {
        async function getNearbyStores() {
            const response = await fetch(`${backend}/api/gas-stations?lat=${latitude}&lng=${longitude}`);
            const stores = await response.json();

            setStores(stores);
        }

        if (latitude && longitude) {
            getNearbyStores();
        }
    }, [latitude, longitude]);

    let storeElement;
    if (stores) {
        storeElement = stores.map(store =>
            <PriceCard
                key={store.properties.place_id}
                storeName={store.properties.name}
                price="-.--"
                bestPrice={false}
                distance={(store.properties.distance / 1609).toPrecision(2)}
                address={store.properties.housenumber + ' ' + store.properties.street}
                hours='24/7'
                productName='ZYN Peppermint'
                strength='6MG'
                amount='15 POUCHES'
                accentColor={theme.colors.tertiaryContainer}
            />
        )
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
                    <Text style={styles.labelCaps}>CURRENT AREA: {location?.city}</Text>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.headlineLg}>Best Value Near You</Text>
                </View>

                {storeElement}

            </ScrollView>
        </SafeAreaView>
    );
}