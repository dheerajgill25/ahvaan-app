import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppRow from './AppRow';
import AppText from './AppText';
import { AppFontFamily } from '../Theme/Utils';
import { useTheme } from '../Hooks/useTheme';
import NavigationManager from '../Navigator/Component/NavigationManager';
import FilterHistoryModal from '../Containers/History/Modal/FilterHistoryModal';

interface HeaderProps {
    onBackPress?: () => void;
    onFilterPress?: () => void;
    titleText?: string;
    iconName?: string;
    icon?: string

}

const Header: React.FC<HeaderProps> = ({
    onBackPress,
    onFilterPress,
    titleText = 'History',
    iconName = 'chevron-left',
    icon
}) => {
    const { value } = useTheme();
    const [visible, setVisible] = useState(false);

    return (
        <LinearGradient colors={['#e60000', '#cc0000']} style={styles.headerContainer}>
            <AppRow alignItems="center" justifyContent="space-between" style={{ zIndex: 1 }}>
                <TouchableOpacity onPress={onBackPress}>
                    <AppRow alignItems="center" gap="10">
                        <Icon
                            name={iconName}
                            size={28}
                            color={value.color.white}
                            onPress={() => NavigationManager.navigationRef.goBack()}
                        />
                        <AppText
                            variant="HeaderText"
                            style={{
                                fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
                                color: value.color.white,
                            }}
                        >
                            {titleText}
                        </AppText>
                    </AppRow>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)} style={{ zIndex: 1 }}>
                    {icon && <Icon name={icon} size={24} color={value.color.white} />}
                </TouchableOpacity>
            </AppRow>

            {visible && (
                <FilterHistoryModal visible={visible} onclose={() => setVisible(false)} />
            )}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        paddingHorizontal: 16,
        paddingVertical: 16,
        zIndex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Header;
