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

function useAppTextInputStyle(fillParent: boolean, isCountryCode?: boolean) {
    const { style, value } = useTheme();

    return StyleSheet.create({
        label: {
            fontSize: value.fontSize.small,
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            color: value.color.black,
            marginBottom: 4,
        },
        containerInput: {
            ...style.gutter.paddingRight.small,
            ...(fillParent ? style.layout.fill : {}),
            borderColor: value.color.borderColor,
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 16,
            ...(isCountryCode ? style.gutter.paddingLeft.inputHeight : {}),
        },
        placeholder: {
            position: "absolute",
            left: 17,
            top: 13,
            fontSize: value.fontSize.small,
            color: value.color.placeHolderColor,
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            zIndex: 1,
        },
        inputBase: {
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 16,
            fontSize: 14,
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            height: 48,
            color: "#000",
        },
        errorText: {
            fontSize: value.fontSize.small,
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            color: value.color.danger,
            marginTop: 5,
        },
    });
}

interface AppTextInputProps extends TextInputProps {
    label?: string;
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
    ...props
}: AppTextInputProps) => {
    const themeStyle = useAppTextInputStyle(fillParent, isCountryCode);
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState(props.value?.toString() || "");
    const { value } = useTheme();
    const inputRef = useRef<TextInput>(null);
    const dynamicInputStyle: ViewStyle = {
        backgroundColor: editable ? backgroundColor ?? "#fff" : "#f7f7f7",
        borderColor: value.color.borderColor,
        borderWidth: 1,
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
                <View >
                    {!text && Placeholder && (
                        <Text
                            style={[
                                themeStyle.placeholder,
                                // { pointerEvents: "none" },
                                placeholderColor && { color: placeholderColor },
                            ]}
                        >
                            {Placeholder}
                        </Text>
                    )}
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
                        placeholder={Placeholder || placeholderColor}
                    />
                </View>
            </TouchableOpacity>
            {errorText && (
                <Text style={[themeStyle.errorText, errorStyle]}>
                    {errorText}
                </Text>
            )}
        </View>
    );
};
