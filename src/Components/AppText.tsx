import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '../Hooks/useTheme';
import { AppFontFamily } from "../Theme/Utils";
type TextVariant = 'title' | 'heading' | 'subheading' | 'description' | 'LoginText' | "smallText" | "HeaderText";

interface AppTextProps extends TextProps {
    variant?: TextVariant;
}
const theme = useTheme();
const { value, style } = theme;
const variantStyles: Record<TextVariant, TextStyle> = {

    title: {
        fontSize: value.fontSize.large - 3,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
        color: value.color.white,

    },
    heading: {
        fontSize: value.fontSize.medium + 1,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        color: value.color.white,

    },
    LoginText: {
        fontSize: value.fontSize.medium + 1,
        fontFamily: AppFontFamily.POPPINS_MEDIUM,
        color: value.color.black,
        // lineHeight: value.metricSize.sm

    },
    HeaderText: {
        fontSize: value.fontSize.normal,
        fontFamily: AppFontFamily.POPPINS_MEDIUM,
        color: value.color.white,
        // lineHeight: value.metricSize.sm

    },
    smallText: {
        fontSize: value.fontSize.small,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
        color: value.color.samlltextColor,
        // lineHeight: value.metricSize.sm

    },
    subheading: {
        fontSize: value.fontSize.footprint,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
        color: value.color.white,
    },
    description: {
        fontSize: value.fontSize.regular - 1,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
        color: value.color.white,
    },
};

const AppText: React.FC<AppTextProps> = ({

    variant = 'description',
    style,
    children,
    ...rest
}) => {
    return (
        <Text style={[variantStyles[variant], style]} {...rest}>
            {children}
        </Text>
    );
};

export default AppText;
