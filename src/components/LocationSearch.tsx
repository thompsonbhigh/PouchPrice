import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles, theme } from '../styles/global';

type Suggestion = {
    id: string;
    label: string;
    address: string;
    name: string;
    street: string;
    housenumber: string;
    city: string;
    state: string;
    lat: number;
    lng: number;
};

export default function LocationSearch({ userLat, userLng, backend, setLocation }: any) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Suggestion | null>(null);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        if (query.trim().length < 2) {
        setSuggestions([]);
        return;
        }

        const timeout = setTimeout(async () => {
            try {
                const params = new URLSearchParams({
                text: query,
                });

                if (userLat && userLng) {
                    params.append("lat", String(userLat));
                    params.append("lng", String(userLng));
                }

                const res = await fetch(`${backend}/api/autocomplete?${params.toString()}`);
                const data = await res.json();

                setSuggestions(data);
            } catch (err) {
                console.error("Autocomplete fetch failed:", err);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [query, userLat, userLng]);

    return (
        <View>
            <View style={styles.inputWrapper}>
                <Ionicons name='storefront-outline' style={styles.inputIcon} size={24} />
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={(e) => {setQuery(e); setInputText(e)}}
                    placeholder="e.g. 7-Eleven, Main St"
                    placeholderTextColor={theme.colors.secondary}
                    autoCorrect={false}
                    enterKeyHint='search'
                />
            </View>

            {suggestions.map((item) => (
                <Pressable key={item.id} onPress={() => {setSelectedLocation(item), setLocation(item), setQuery(''), setInputText(item.label.split(',')[0])}}>
                    <Text>{item.label}</Text>
                </Pressable>
            ))}
        </View>
    );
}