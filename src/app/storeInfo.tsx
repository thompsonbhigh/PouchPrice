import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Bell } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "../styles/global";

export default function storeInfo() {
    const router = useRouter();
    const { storeName, address } = useLocalSearchParams();

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

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}