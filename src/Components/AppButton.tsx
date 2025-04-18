import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from './AppText';
import { useTheme } from '../Hooks/useTheme';
import { AppFontFamily } from '../Theme/Utils';
import AppRow from './AppRow';

type ButtonVariant = 'white' | 'secondary' | 'outline' | 'primary' | 'gradient';

interface AppButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    textColor?: string;
    fontSize?: number;
    borderRadius?: number;
    onPress?: () => void;
    width?: ViewStyle['width'];
    loading?: boolean;
    icon?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
    title,
    variant = 'primary',
    textColor,
    fontSize = 14,
    borderRadius = 5,
    onPress,
    width = '100%',
    loading = false,
    icon,
    ...props
}) => {
    const theme = useTheme();
    const { value: { color } } = theme;

    const padding = '4px 13px 4px 13px';
    const paddingValues = padding.replace(/px/g, '').split(' ').map(Number);

    const containerStyles: ViewStyle = {
        ...styles.base,
        ...getVariantStyles(variant, props.disabled, color),
        borderRadius,
        width: "100%",
        height: 36,
        paddingVertical: paddingValues[0] === paddingValues[2] ? paddingValues[0] : undefined,
        paddingHorizontal: paddingValues[1] === paddingValues[3] ? paddingValues[1] : undefined,
    };

    const textStyles: TextStyle = {
        color: getTextColor(variant, textColor, color),
        fontSize,

        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            disabled={props.disabled}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ borderRadius, width }}
            {...props}
        >
            {variant === 'gradient' ? (
                <LinearGradient
                    colors={['#DD2529', '#880608']}
                    start={{ x: -0.3, y: 0 }}
                    end={{ x: 1.05, y: 0 }}
                    style={[containerStyles, { borderRadius }]}
                >
                    <View style={styles.content}>
                        <AppRow gap='10' alignItems='center'>
                            <AppText style={textStyles} variant='heading'>{title}</AppText>
                            {icon && <View>{icon}</View>}
                        </AppRow>

                    </View>
                </LinearGradient>
            ) : (
                <View style={containerStyles}>
                    <View style={styles.content}>
                        <AppRow gap='10' alignItems='center'>
                            <AppText style={textStyles} variant='heading'>{title}</AppText>
                            {icon && <View>{icon}</View>}
                        </AppRow>

                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});

const getVariantStyles = (
    variant: ButtonVariant,
    disabled: boolean | undefined,
    color: any
): ViewStyle => {
    if (disabled) {
        return {
            backgroundColor: color.backcolor,
        };
    }

    switch (variant) {
        case 'secondary':
            return {
                backgroundColor: color.secondary,
            };
        case 'outline':
            return {
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: color.bordercolor,
            };
        case 'gradient':
            return {
                backgroundColor: 'transparent',
            };
        case 'primary':
        default:
            return {
                backgroundColor: color.white,
            };
    }
};

const getTextColor = (
    variant: ButtonVariant,
    textColor: string | undefined,
    color: any
): string => {
    if (variant === 'outline') return color.bordercolor;
    if (variant === 'gradient') return textColor || '#FFFFFF';
    return textColor || color.secondary;
};
