import { router } from "expo-router";
import { Car } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { styles, theme } from '../styles/global';

type PriceCardProps = {
    storeName: string;
    price: string;
    bestPrice?: boolean;
    distance: string;
    hours: string;
    productName: string;
    strength: string;
    amount: string;
    accentColor?: string;
    image?: any;
    address: string;
}

export function PriceCard({
    storeName,
    price,
    distance,
    hours,
    productName,
    strength,
    amount,
    address,
    image = require('../../assets/images/zyn.png'),
    bestPrice = false,
    accentColor = theme.colors.tertiary,
}: PriceCardProps) {
    return (
        <Pressable onPress={() => router.push({
            pathname: '/storeInfo',
            params: { storeName: storeName, address: address }
        })} style={({ pressed }) => [
            styles.productCard,
            pressed && styles.cardPressed,
        ]}>
            <View style={[styles.brandAccent, {backgroundColor: accentColor}]} />
            <View style={styles.rowBetween}>
                <View>
                    <Text style={styles.productTitle}>{storeName}</Text>
                    <View style={styles.row}>
                        <Car color={theme.colors.onSurfaceVariant} />
                        <Text style={styles.productSubtitle}>{distance.toString()} mi ⬝ Open {hours != '24/7' ? 'til ' : ''}{hours}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.productPrice}>${price}</Text>
                    <View style={bestPrice ? styles.bestPriceBadge : null}><Text style={styles.bestPriceText}>{bestPrice ? 'BEST PRICE' : 'PER CAN'}</Text></View>
                </View>
            </View>

            <View style={styles.productMetaRow}>
                <View style={styles.productInfoCard}>
                    <View style={styles.row}>
                        <Image style={styles.productImageBox} source={image} />
                        <View style={styles.column}>
                            <Text style={styles.productInfoTitle}>{productName}</Text>
                            <View style={styles.rowStart}>
                                <View style={styles.chip}>
                                    <Text style={styles.chipText}>{strength}</Text>
                                </View>
                                <View style={styles.chip}>
                                    <Text style={styles.chipText}>{amount}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )}