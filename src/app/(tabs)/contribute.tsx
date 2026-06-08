import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from '../../styles/global';
import { Bell, MapPin } from "lucide-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Dropdown from 'react-native-input-select';
import { useState } from "react";

export default function Contribute() {
    const [brand, setBrand] = useState('');

    return (
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
                <View style={styles.inputWrapper}>
                    <Ionicons name="storefront-outline" style={styles.inputIcon} size={24}/>
                    <TextInput style={styles.input} placeholderTextColor={theme.colors.secondary} placeholder="e.g. 7-Eleven, Main St" />
                </View>

                <View style={styles.emptyStateTitle} />
        
                <Text style={styles.linkText}>Price (USD)</Text>
                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputIcon, {fontSize: 24}]}>$</Text>
                    <TextInput style={[styles.input, {color: theme.colors.primary, fontFamily: theme.fonts.headingBold, fontSize: 28, lineHeight: 0}]} placeholderTextColor={theme.colors.secondary} placeholder="0.00" keyboardType="numeric"/>
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
                        onValueChange={(value) => setBrand(value)}
                        primaryColor={theme.colors.primary}
                    />
            </ScrollView>
        </SafeAreaView>
    )
}