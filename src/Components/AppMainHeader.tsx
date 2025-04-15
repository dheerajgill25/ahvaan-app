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
import { THEME_DEFAULT_IMAGE } from '../Theme/Default/Image';

interface HeaderProps {
    onBackPress?: () => void;
    onFilterPress?: () => void;
    titleText?: string;
    iconName?: string;
    icon?: string
    Contact?: string
    favorite?: string

}

const Header: React.FC<HeaderProps> = ({
    onBackPress,
    onFilterPress,
    titleText = 'History',
    iconName = 'chevron-left',
    icon,
    Contact,
    favorite
}) => {
    const { value } = useTheme();
    const [visible, setVisible] = useState(false);

    return (
        <LinearGradient colors={['#e60000', '#cc0000']} style={styles.headerContainer}>
            <AppRow alignItems="center" justifyContent="space-between" >
                <TouchableOpacity >
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

                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => setVisible(prev => !prev)}
                    style={{ zIndex: 999 }}
                >
                    {icon && <Icon name={icon} size={24} color={value.color.white} />}

                </TouchableOpacity>
                {Contact && <THEME_DEFAULT_IMAGE.IconModal.HeaderIocn />}
                {favorite && <THEME_DEFAULT_IMAGE.IconModal.Heart />}
            </AppRow>

            {visible && (
                <FilterHistoryModal visible={visible} onclose={() => setVisible(false)} onPress={() => setVisible(false)} />
            )}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        paddingHorizontal: 16,
        paddingVertical: 16,

    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Header;
