import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { findIndex } from 'lodash';
import { IDropdownRef } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import { Dropdown } from 'react-native-element-dropdown';
import { AppFontFamily } from '../Theme/Utils';

interface ExampleSelectProps {
    label?: string;
    required?: boolean;
    options: Array<any>;
    value?: any;
    onSelect: (value: any) => void;
    error?: string;
    isFlex?: boolean;
    labelField: string;
    valueField: string;
    backgroundColor?: string;
    customBorderRadius?: {
        borderTopLeftRadius?: number;
        borderTopRightRadius?: number;
        borderBottomLeftRadius?: number;
        borderBottomRightRadius?: number;
    };
    hideBorderSides?: ("top" | "bottom" | "left" | "right")[]; // 👈 NEW PROP
}

const AppSelect: React.FC<ExampleSelectProps> = ({
    label,
    required,
    options,
    value,
    onSelect,
    error,
    isFlex,
    labelField,
    valueField,
    backgroundColor = '#fff',
    customBorderRadius = {},
    hideBorderSides = [],
    ...props
}) => {
    const dropdownRef = useRef<IDropdownRef>(null);

    const activeIndex = useMemo(() => {
        if (!value) return -1;
        return findIndex(options, (item: any) => item[valueField] === value);
    }, [options, value]);

    const borderStyle = {
        borderTopWidth: hideBorderSides.includes('top') ? 0 : 1,
        borderBottomWidth: hideBorderSides.includes('bottom') ? 0 : 1,
        borderLeftWidth: hideBorderSides.includes('left') ? 0 : 1,
        borderRightWidth: hideBorderSides.includes('right') ? 0 : 1,
        borderColor: value ? '#f7901e' : '#ccc',
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {label && (
                    <View style={styles.labelRow}>
                        <Text style={styles.labelText}>{label}</Text>
                        {required && <Text style={styles.required}>*</Text>}
                    </View>
                )}
                {options?.length > 0 && (
                    <Dropdown
                        ref={dropdownRef}
                        data={options}
                        labelField={labelField}
                        valueField={valueField}
                        value={value}
                        onChange={onSelect}
                        disable={!value}
                        flatListProps={{
                            initialScrollIndex: activeIndex > 0 ? activeIndex : undefined,
                            getItemLayout: (_: any, index: number) => ({
                                length: 45,
                                offset: 45 * index,
                                index,
                            }),
                        }}
                        style={[
                            styles.dropdown,
                            borderStyle,
                            {
                                backgroundColor,
                            },
                            customBorderRadius,
                        ]}
                        selectedTextStyle={styles.selectedText}
                        itemTextStyle={styles.itemText}
                    />
                )}
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AppSelect;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    labelText: {
        fontSize: 10,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
        color: '#000',
    },
    required: {
        color: 'red',
        marginLeft: 2,
        marginTop: -10,
    },
    dropdown: {
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 30,
    },
    selectedText: {
        color: '#000',
        fontSize: 10,
        fontFamily: AppFontFamily.POPPINS_BOLD,
    },
    itemText: {
        color: '#000',
        fontSize: 14,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});
