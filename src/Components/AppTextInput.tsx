import React, { useRef, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import { useTheme } from "../Hooks/useTheme";
import { AppFontFamily } from "../Theme/Utils";
import AppText from "./AppText";

function useAppTextInputStyle(fillParent: boolean, isCountryCode?: boolean) {
    const { style, value } = useTheme();

    return StyleSheet.create({
        label: {
            fontSize: value.fontSize.small,
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
            color: value.color.black,
            ...style.gutter.marginBottom.tinySmall,
            ...style.gutter.marginLeft.tiny,
        },
        containerInput: {
            ...style.gutter.paddingRight.small,
            ...(fillParent ? style.layout.fill : {}),
            ...style.gutter.paddingVertical.small,
            ...style.gutter.paddingHorizontal.regularxxl,
            ...(isCountryCode ? style.gutter.paddingLeft.inputHeight : {}),
        },
        placeholder: {
            position: "absolute",
            left: value.metricSize.regularxxl,
            top: value.metricSize.small,
            fontSize: value.fontSize.small,
            fontFamily: AppFontFamily.POPPINS_MEDIUM,
            zIndex: value.metricSize.oneSmall,
        },
        inputBase: {
            flex: value.metricSize.oneSmall,
            ...style.gutter.paddingVertical.small,
            ...style.gutter.paddingHorizontal.regularxxl,

            fontSize: value.fontSize.small,
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            height: value.metricSize.inputHeight - 2,
            color: value.color.black,
        },
        errorText: {
            fontSize: value.fontSize.footprint,
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            color: value.color.danger,
            ...style.gutter.marginTop.tiny

        },
    });
}

interface AppTextInputProps extends TextInputProps {
    label?: string;
    inputRef?: ((ref: TextInput) => void) | React.RefObject<TextInput>;
    labelStyle?: TextStyle;
    errorText?: string;
    fillParent?: boolean;
    isCountryCode?: boolean;
    placeholderColor?: string;
    Placeholder?: string;
    style?: ViewStyle;
    errorStyle?: TextStyle;
    backgroundColor?: string;
    labelColor?: string;
    borderRadius?: {
        borderRadius?: number;
        borderTopLeftRadius?: number;
        borderTopRightRadius?: number;
        borderBottomLeftRadius?: number;
        borderBottomRightRadius?: number;
    };
    hideBorderSides?: ("top" | "bottom" | "left" | "right")[];
}

export const AppTextInput = ({
    label,
    labelStyle,
    errorText,
    fillParent = true,
    isCountryCode,
    placeholderColor,
    Placeholder,
    labelColor,
    style,
    errorStyle,
    backgroundColor,
    borderRadius = {},
    editable = true,
    hideBorderSides = [],
    ...props
}: AppTextInputProps) => {
    const themeStyle = useAppTextInputStyle(fillParent, isCountryCode);
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState(props.value?.toString() || "");
    const { value } = useTheme();
    const inputRef = useRef<TextInput>(null);

    const dynamicInputStyle: ViewStyle = {
        backgroundColor: editable ? backgroundColor ?? "#fff" : "#fff",
        borderTopWidth: hideBorderSides.includes("top") ? 0 : 1,
        borderBottomWidth: hideBorderSides.includes("bottom") ? 0 : 1,
        borderLeftWidth: hideBorderSides.includes("left") ? 0 : 1,
        borderRightWidth: hideBorderSides.includes("right") ? 0 : 1,
        borderColor: errorText ? value.color.danger : "rgba(217, 217, 217, 0.62)",
        borderRadius: borderRadius?.borderRadius,
        borderTopLeftRadius:
            borderRadius?.borderTopLeftRadius ?? borderRadius?.borderRadius ?? 8,
        borderTopRightRadius:
            borderRadius?.borderTopRightRadius ?? borderRadius?.borderRadius ?? 8,
        borderBottomLeftRadius:
            borderRadius?.borderBottomLeftRadius ?? borderRadius?.borderRadius ?? 8,
        borderBottomRightRadius:
            borderRadius?.borderBottomRightRadius ?? borderRadius?.borderRadius ?? 8,
    };

    return (
        <View>
            {label && (
                <Text
                    style={[
                        themeStyle.label,
                        labelStyle,
                        labelColor && { color: labelColor },
                    ]}
                >
                    {label}
                </Text>
            )}
            <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}>
                <View>
                    {/* {!text && Placeholder && (
                        <Text
                            style={[
                                themeStyle.placeholder,
                                {
                                    color: errorText
                                        ? value.color.danger
                                        : placeholderColor || value.color.placeHolderColor,
                                },
                            ]}
                        >
                            {Placeholder}
                        </Text>
                    )} */}
                    <TextInput
                        {...props}
                        ref={inputRef}
                        value={text}
                        editable={editable}
                        onChangeText={(t) => {
                            setText(t);
                            props.onChangeText?.(t);
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={[themeStyle.inputBase, dynamicInputStyle, style]}
                        placeholder={Placeholder}
                        placeholderTextColor={
                            placeholderColor || value.color.placeHolderColor
                        }
                    />
                </View>
            </TouchableOpacity>
            {errorText && (
                <AppText variant="subheading" style={[themeStyle.errorText, errorStyle]}>
                    {errorText}
                </AppText>
            )}
        </View>
    );
};
