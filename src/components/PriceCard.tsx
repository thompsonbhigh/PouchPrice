import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from '../styles/global';

type PriceCardProps = {
    storeName: string;
    price: string;
    distance: string;
    productName: string;
    address: string;
    reportedAt: string;
}

export function PriceCard({
    storeName,
    price,
    distance,
    productName,
    address,
    reportedAt
}: PriceCardProps) {
    return (
        <Pressable onPress={() => router.push({
            pathname: '/storeInfo',
            params: { storeName: storeName, address: address }
        })} style={({ pressed }) => [
            styles.brandCard,
            pressed && styles.cardPressed,
        ]}>
                <View style={styles.brandEmphasisHeader}>
                    <Text style={styles.brandEmphasisHeaderText}>{productName}</Text>
                </View>

                <View style={styles.brandEmphasisBody}>
                    <View style={styles.brandEmphasisInfo}>
                        <Text style={styles.brandEmphasisStore}>{storeName}</Text>
                        <View style={styles.row}>
                            <Ionicons name="car-outline" style={styles.brandEmphasisDistance} />
                            <Text style={styles.brandEmphasisDistance}>{distance} mi</Text>
                        </View>
                    </View>

                    <View style={styles.columnRight}>
                        <Text style={styles.brandEmphasisPrice}>${price}</Text>
                        <Text style={styles.brandEmphasisDistance}>{reportedAt}</Text>
                    </View>
                </View>

        </Pressable>
    )}