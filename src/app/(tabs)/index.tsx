import { useLocalSearchParams } from 'expo-router';
import { Bell, LocateFixed, MapPin, Search } from 'lucide-react-native';
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PriceCard } from "../../components/PriceCard";
import { styles, theme } from '../../styles/global';

export default function HomeScreen() {
    const [isFocused, setIsFocused] = useState(false);
    const [stores, setStores] = useState<any[]>([]);
    const { lat, lng, city } = useLocalSearchParams();

    const backend = 'http://localhost:3000';
    // const backend = 'https://pouchpricebackend-production.up.railway.app';

    useEffect(() => {
        async function getNearbyStores() {
            const response = await fetch(`${backend}/api/gas-stations?lat=${lat}&lng=${lng}`);
            const storeInfo = await response.json();

            console.log(storeInfo.stores);
            setStores(storeInfo.stores);
        }

        if (lat && lng) {
            getNearbyStores();
        }
    }, [lat, lng]);

    let storeElement;
    if (stores) {
        storeElement = stores.map(store =>
            <PriceCard
                key={store.place_id}
                storeName={store?.name || 'Unknown Store'}
                price={store.prices[0]?.price || '-.--'}
                distance={store.distance_miles}
                address={store.address}
                productName={store.prices[0]?.brand}
                reportedAt={store.last_reported_text}
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
                    <Text style={styles.labelCaps}>CURRENT AREA: {city}</Text>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.headlineLg}>Best Value Near You</Text>
                </View>

                {storeElement}

            </ScrollView>
        </SafeAreaView>
    );
}