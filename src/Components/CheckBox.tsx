import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "../Hooks/useTheme";
import AppText from "./AppText";
import { AppFontFamily, normalize } from "../Theme/Utils";

interface CheckBoxProps {
    label: string;
    isChecked: boolean;
    onToggle: (value: boolean) => void;
}
const CheckBox = ({ label, isChecked, onToggle }: CheckBoxProps) => {
    const [isCheck, setCheck] = useState(isChecked);
    const { checkBoxWrap, tradingText, activeText } = useCheckBoxStyle();
    const {
        value: { color },
    } = useTheme();
    useEffect(() => {
        setCheck(isChecked);
    }, [isChecked]);
    return (
        <TouchableOpacity
            onPress={() => {
                onToggle(!isCheck);
            }}
            style={checkBoxWrap}
        >
            <Icon
                name={isCheck ? "check-square" : "square-o"}
                size={20}
                color={isCheck ? color.black : color.gray}
            />
            <AppText style={[tradingText, isCheck && activeText]}>{label}</AppText>
        </TouchableOpacity>
    );
};

export default CheckBox;
function useCheckBoxStyle() {
    const {
        style: { font, layout, gutter },
        value: { color, fontSize },
    } = useTheme();

    return StyleSheet.create({
        checkBoxWrap: {
            ...layout.rowVerticalCenter,
            ...gutter.gap.tiny,
        },
        tradingText: {
            color: color.white,
            fontSize: fontSize.footprint,

            fontFamily: AppFontFamily.POPPINS_MEDIUM,
            lineHeight: normalize(18),
        },
        activeText: {
            color: color.info,
        },
    });
}
