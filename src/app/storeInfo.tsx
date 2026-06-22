import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Bell } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "../styles/global";
import { useEffect, useState } from "react";

export default function storeInfo() {
    const router = useRouter();
    const { storeName, address, id } = useLocalSearchParams();
    const [storeInfo, setStoreInfo] = useState([]);

    const backend = 'https://pouchpricebackend-production.up.railway.app';
    // const backend = 'http://localhost:3000';

    async function getStoreInfo(id: string | string[]) {
        try {
            const response = await fetch(`${backend}/api/store-info?id=${id}`);
            const result = await response.json();

            setStoreInfo(result.storeInfo);
        } catch (err) {
            console.error('Unable to get store info', err);
        }
    }

    useEffect(() => {
        getStoreInfo(id);
    }, []);

    const storeStockList = Array.isArray(storeInfo) ? storeInfo : [];

    const storeStock = storeStockList.map((card: any) => (
        <View key={card.id} style={styles.brandCard}>
            <View style={styles.brandEmphasisBody}>
                <Text style={styles.brandEmphasisHeaderText}>{card.brand}</Text>
                <View style={styles.columnRight}>
                    <Text style={styles.brandEmphasisPrice}>${card.price}</Text>
                    <Text style={styles.brandEmphasisDistance}>{card.last_reported_text}</Text>
                </View>
            </View>
        </View>
    ));

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: "#BBFFE2", flex: 1}}>
                <View style={styles.glassNav}>
                    <Ionicons name="arrow-back-outline" color={theme.colors.primary} size={24} onPress={() => router.back()}/>
                    <Text style={styles.brandName}>PouchPrice</Text>
                    <Bell color={theme.colors.primary} />
                </View>

                <ScrollView style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <View style={styles.productImageBox}>
                                <Ionicons name="storefront-outline" size={40} color={theme.colors.primary} />
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.headlineLg}>{storeName}</Text>
                                <View style={styles.rowStart}>
                                    <Ionicons name="location-outline" size={16} />
                                    <Text style={styles.chipText}>{address}</Text>   
                                </View>
                            </View>
                        </View>

                        <View style={styles.emptyStateTitle} />

                        <View style={styles.rowBetween}>
                            <Pressable style={({ pressed }) => [
                                styles.button, 
                                styles.buttonPrimary, 
                                {width: '48%'},
                                pressed && { backgroundColor: theme.colors.inversePrimary}
                                ]}
                            >
                                <Ionicons name="navigate-outline" style={[styles.buttonPrimaryText, {marginRight: 8}]} />
                                <Text style={styles.buttonPrimaryText}>Directions</Text>
                            </Pressable>
                            <Pressable style={({ pressed }) => [
                                styles.button, 
                                styles.buttonSecondary, 
                                {width: '48%'},
                                pressed && { backgroundColor: theme.colors.surface}
                                ]}
                            >
                                <Ionicons name="share-social-outline" style={[styles.buttonSecondaryText, {marginRight: 8}]} />
                                <Text style={styles.buttonSecondaryText}>Share</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.emptyStateTitle} />
                    <View style={styles.emptyStateTitle} />

                    <View style={styles.section}>
                        <Text style={styles.headlineLgMobile}>Current Stock</Text>
                    </View>

                    <View style={styles.section}>
                        {storeStock}
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}