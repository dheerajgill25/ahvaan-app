import React from 'react';
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
    View,
} from 'react-native';
import AppText from './AppText';
import { useTheme } from '../Hooks/useTheme';
import { AppFontFamily } from '../Theme/Utils';



type ButtonVariant = 'white' | 'secondary' | 'outline' | 'primary';

interface AppButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    textColor?: string;
    fontSize?: number;
    padding?: string;
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
    ...props
}) => {

    const theme = useTheme();
    const { value: { color } } = theme;
    const padding = '4px 13px 4px 13px';
    const paddingValues = padding.replace(/px/g, '').split(' ').map(Number);

    const containerStyles: ViewStyle = {
        ...styles.base,
        ...getVariantStyles(variant, props.disabled),
        borderRadius,
        width: width as ViewStyle['width'],
        height: 36,
        paddingVertical: paddingValues[0] === paddingValues[2] ? paddingValues[0] : undefined,
        paddingHorizontal: paddingValues[1] === paddingValues[3] ? paddingValues[1] : undefined,
    };

    const textStyles: TextStyle = {
        color: getTextColor(variant, textColor),
        fontSize,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
    };

    return (
        <TouchableOpacity
            style={containerStyles}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={props.disabled}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            {...props}
        >
            {/* {shouldShowLoading && title !== 'Cancel' && title !== 'Back' ? (
        <ActivityIndicator color={variant === 'outline' ? '#F7901E' : '#FFFFFF'} />
      ) : ( */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                <AppText style={textStyles} variant='heading'>{title}</AppText>
                {props.icon && <View>{props.icon}</View>}
            </View>
            {/* )} */}
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const theme = useTheme();
const { value: { color } } = theme;
const getVariantStyles = (
    variant: ButtonVariant,
    disabled?: boolean
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
        case 'primary':
        default:
            return {
                backgroundColor: color.white,
            };
    }
};

const getTextColor = (
    variant: ButtonVariant,
    textColor?: string
): string => {
    if (variant === 'outline') return color.bordercolor;
    return textColor || color.secondary;
};
