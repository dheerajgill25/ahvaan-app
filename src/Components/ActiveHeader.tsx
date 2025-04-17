import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import { useTheme } from '../Hooks/useTheme';
import AppText from './AppText';
import { AppFontFamily } from '../Theme/Utils';
import AppRow from './AppRow';

interface Props {
    activeTab?: 'events' | 'invitations';
    handleTabChange?: (tab: 'events' | 'invitations') => void;
    invitationCount?: number;
    eventCount?: number;
}

const AppHeader: React.FC<Props> = React.memo(({
    activeTab = 'events',
    handleTabChange,
    invitationCount = 0,
    eventCount = 1,
}) => {
    const { value } = useTheme();
    const activeColor = value.color.ActiveColor || '#ffffff';

    const styles = StyleSheet.create({
        container: {
            paddingTop: 30,
            paddingBottom: 10,
            backgroundColor: activeColor,
        },
        tabWrapper: {
            flexDirection: 'row',
            borderRadius: 30,
            marginHorizontal: 25,
            backgroundColor: '#F5F5F5',
        },
        tabButton: {
            flex: 1,
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
        },
        activeTabButton: {
            backgroundColor: value.color.ActiveColor,
            marginVertical: 3,
            marginHorizontal: 3,
        },
        activeText: {
            color: value.color.white,
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        },
        inactiveText: {
            color: value.color.black,
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        },
        countStyle: {
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
            fontSize: 12,
            marginTop: 1
        },
        countCircle: {
            width: 20,
            height: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',

        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.tabWrapper}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleTabChange?.('events')}
                    style={[
                        styles.tabButton,
                        activeTab === 'events' && styles.activeTabButton,
                    ]}
                >
                    <AppRow alignItems='center' gap='10'>
                        <AppText
                            variant="profiletext"
                            style={activeTab === 'events' ? styles.activeText : styles.inactiveText}
                        >
                            Events
                        </AppText>
                        <View
                            style={[
                                styles.countCircle,
                                {
                                    backgroundColor:
                                        activeTab === 'events'
                                            ? value.color.white
                                            : value.color.ActiveColor,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.countStyle,
                                    {
                                        color:
                                            activeTab === 'events'
                                                ? value.color.ActiveColor
                                                : 'white',
                                    },
                                ]}
                            >
                                {eventCount}
                            </Text>
                        </View>
                    </AppRow>
                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleTabChange?.('invitations')}
                    style={[
                        styles.tabButton,
                        activeTab === 'invitations' && styles.activeTabButton,
                    ]}
                >
                    <AppRow alignItems='center' gap='10' >
                        <AppText
                            variant="profiletext"
                            style={activeTab === 'invitations' ? styles.activeText : styles.inactiveText}
                        >
                            Invitation
                        </AppText>
                        <View
                            style={[
                                styles.countCircle,
                                {
                                    backgroundColor:
                                        activeTab === 'invitations'
                                            ? value.color.white
                                            : value.color.ActiveColor,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.countStyle,
                                    {
                                        color:
                                            activeTab === 'invitations'
                                                ? value.color.ActiveColor
                                                : 'white',
                                    },
                                ]}
                            >
                                {invitationCount}
                            </Text>
                        </View>
                    </AppRow>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default AppHeader;
