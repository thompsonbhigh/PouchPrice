import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Logo from '../../assets/images/PouchPricePng.png';
import { styles } from '../styles/global';

export default function Loader() {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ]),
        );

        animation.start();

        return () => animation.stop();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View style={styles.center}>
            <Animated.Image
                source={Logo}
                style={{
                    width: 200,
                    height: 200,
                    transform: [{ rotate: spin }],
                }}
            />
        </View>
    )
}