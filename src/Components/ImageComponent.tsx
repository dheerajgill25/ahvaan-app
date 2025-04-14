import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

interface AnimatedInviteImageProps {
    source: any;
    style?: object;
    delay?: number;
}

const AnimatedInviteImage: React.FC<AnimatedInviteImageProps> = ({ source, style, delay = 0 }) => {
    const rotate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animateRotation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(rotate, {
                        toValue: 1,
                        duration: 1500,
                        delay,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                    Animated.timing(rotate, {
                        toValue: 0,
                        duration: 1500,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        animateRotation();
    }, []);

    const rotateInterpolate = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['15deg', '-15deg'],
    });

    return (
        <Animated.Image
            source={source}
            style={[
                styles.image,
                style,
                {
                    transform: [{ rotate: rotateInterpolate }],
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 150,
        borderRadius: 8,
    },
});

export default AnimatedInviteImage;
