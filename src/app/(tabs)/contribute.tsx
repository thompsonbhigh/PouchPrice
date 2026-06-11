import LocationSearch from "@/src/components/LocationSearch";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { Bell, MapPin } from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Dropdown from 'react-native-input-select';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from '../../styles/global';

export default function Contribute() {
    const [brand, setBrand] = useState<any | null>(null);
    const [price, setPrice] = useState<any | null>(null);
    const { lat, lng, city } = useLocalSearchParams();
    const [location, setLocation] = useState<any | null>(null);

    // const backend = 'https://pouchpricebackend-production.up.railway.app';
    const backend = 'http://localhost:3000';

    async function handleSubmit() {
        if (!brand || !price || !location) {
            return;
        }
        try {
            const address = (location?.housenumber ? location.housenumber : '') + ' ' + location.street;
            const response = await fetch(
                `${backend}/api/report-price?address=${address}&name=${location?.name}&brand=${brand}&price=${price}`
            );
            const data = await response.json();
        } catch (err) {
            console.error('Error reporting price: ', err);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1}}>
                <View style={styles.glassNav}>
                    <MapPin color={theme.colors.primary} />
                    <Text style={styles.brandName}>PouchPrice</Text>
                    <Bell color={theme.colors.primary} />
                </View>

                <ScrollView style={styles.container}>

                    <View style={[styles.row]}>
                        <Ionicons name="add-circle" size={30} color={theme.colors.primary}/>
                        <Text style={styles.headlineLg}>Report a Price</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <Text style={styles.bodyMd}>Help the community by sharing local prices. Earn rewards for verified contributions.</Text>
                    </View>

                    <View style={styles.pointCard}>
                        <View style={styles.row}>
                            <Ionicons name="ribbon" size={24} color={theme.colors.onTertiaryContainer} />
                            <Text style={[styles.labelCaps, {color: theme.colors.onTertiaryContainer}]}>EARN 50 POINTS</Text>
                        </View>
                        <Text style={[styles.bodyLg, {color: theme.colors.onTertiaryContainer}]}>Verified Submission</Text>
                    </View>

                    <Pressable style={({ pressed }) => [
                        styles.card,
                        styles.columnCenter,
                        pressed && styles.cardPressed
                    ]}>
                        <Ionicons name="camera-outline" size={40} color={theme.colors.primary} />
                        <Text style={styles.headlineMd}>Upload Photo of Receipt</Text>
                        <View style={styles.emptyStateTitle} />
                        <Text style={styles.mutedText}>Clear photos speed up verification.</Text>
                    </Pressable>

                    <View style={styles.textDivider}>
                        <View style={styles.divider} />
                        <Text style={[styles.mutedText, {paddingHorizontal: 10}]}>OR ENTER MANUALLY</Text>
                        <View style={styles.divider} />
                    </View>

                    <Text style={styles.linkText}>Store Name / Location</Text>
                    {/* <View style={styles.inputWrapper}>
                        <Ionicons name="storefront-outline" style={styles.inputIcon} size={24}/>
                        <TextInput style={styles.input} placeholderTextColor={theme.colors.secondary} placeholder="e.g. 7-Eleven, Main St" />
                    </View> */}
                    <LocationSearch userLat={lat} userLng={lng} backend={backend} setLocation={setLocation} />

                    <View style={styles.emptyStateTitle} />
            
                    <Text style={styles.linkText}>Price (USD)</Text>
                    <View style={styles.inputWrapper}>
                        <Text style={[styles.inputIcon, {fontSize: 24}]}>$</Text>
                        <TextInput 
                            style={[styles.input, {color: theme.colors.primary, fontFamily: theme.fonts.headingBold, fontSize: 28, lineHeight: 0}]} 
                            placeholderTextColor={theme.colors.secondary} 
                            placeholder="0.00" 
                            keyboardType="numeric"
                            maxLength={5}
                            onChangeText={setPrice}
                        />
                    </View>

                    <View style={styles.emptyStateTitle} />

                    <Text style={styles.linkText}>Brand</Text>
                        <Dropdown
                            dropdownStyle={styles.card}
                            isSearchable
                            dropdownIconStyle={{ top:30, right: 20}}
                            placeholder="Select Brand"
                            placeholderStyle={styles.input}
                            options={[
                                { label: 'ZYN', value: 'ZYN'},
                                { label: 'VELO', value: 'VELO'},
                                { label: 'ROGUE', value: 'ROGUE'},
                            ]}
                            selectedValue={brand}
                            selectedItemStyle={styles.input}
                            onValueChange={(value: any) => setBrand(value)}
                            primaryColor={theme.colors.primary}
                        />
                    
                    <Text style={styles.linkText}>Flavor</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="leaf-outline" style={styles.inputIcon} size={24}/>
                        <TextInput 
                            style={styles.input} 
                            placeholderTextColor={theme.colors.secondary} 
                            placeholder="e.g. Wintergreen" 
                            enterKeyHint="done"
                        />
                    </View>

                    <View style={styles.emptyStateTitle} />

                    <Text style={styles.linkText}>Strength</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="flash-outline" style={styles.inputIcon} size={24}/>
                        <TextInput 
                            style={styles.input} 
                            placeholderTextColor={theme.colors.secondary} 
                            placeholder="e.g. 6mg" 
                            enterKeyHint="done"
                        />
                    </View>

                    <Pressable onPress={handleSubmit} style={({ pressed }) => [
                        styles.button, 
                        styles.buttonPrimary, 
                        {marginTop: 20},
                        pressed && {backgroundColor: theme.colors.inversePrimary}
                        ]}>
                        <Text style={styles.headlineMd}>Submit Price Report</Text>
                        <Ionicons name="send-outline" style={[styles.headlineMd, {marginLeft: 5}]} size={24}/>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}