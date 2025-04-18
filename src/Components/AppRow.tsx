import React from 'react';
import { View, ViewStyle, StyleSheet, ViewProps } from 'react-native';
import { useTheme } from '../Hooks/useTheme';
const { value, style } = useTheme();
interface RowProps extends ViewProps {
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    gap?: string;
    children?: React.ReactNode;
}

const AppRow: React.FC<RowProps> = ({
    children,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    padding,
    margin,
    backgroundColor = 'transparent',
    gap = '0px',
    style,
    ...rest
}) => {
    const containerStyle: ViewStyle = {
        flexDirection: 'row',
        alignItems,
        justifyContent,
        backgroundColor,
        ...(padding ? { padding: parseInt(padding) } : {}),
        ...(margin ? { margin: parseInt(margin) } : {}),
        ...(gap ? { columnGap: parseInt(gap) } : {}),
    };

    return (
        <View style={[containerStyle, style]} {...rest}>
            {children}
        </View>
    );
};

export default AppRow;
