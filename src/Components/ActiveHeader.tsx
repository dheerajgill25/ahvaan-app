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
    const { value, style } = useTheme();
    const activeColor = value.color.ActiveColor || value.color.white;

    const styles = StyleSheet.create({
        container: {
            ...style.gutter.paddingBottom.small,
            ...style.gutter.paddingTop.iconSizeLargr,
            backgroundColor: activeColor,
        },
        tabWrapper: {
            ...style.layout.row,
            borderRadius: value.metricSize.iconSizeLargr,
            ...style.gutter.marginHorizontal.sm,
            backgroundColor: value.color.white,
        },
        tabButton: {
            flex: 1,
            ...style.gutter.paddingVertical.tiny,
            ...style.layout.alignItemsCenter,
            ...style.layout.justifyContentCenter,
            borderRadius: value.metricSize.iconSizeLargr,
        },
        activeTabButton: {
            backgroundColor: value.color.ActiveColor,
            ...style.gutter.marginVertical.tinyMini,
            ...style.gutter.marginHorizontal.tinyMini,
        },
        activeText: {
            color: value.color.white,
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,

        },
        inactiveText: {
            color: value.color.black,
            fontFamily: AppFontFamily.POPPINS_MEDIUM,
        },
        countStyle: {
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
            fontSize: value.fontSize.footprint,
            ...style.gutter.marginTop.oneSmall
        },
        countCircle: {
            width: value.metricSize.medium,
            height: value.metricSize.medium,
            borderRadius: value.metricSize.small,
            ...style.layout.alignItemsCenter,
            ...style.layout.justifyContentCenter,

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
                        <View>
                            <AppText
                                variant="profiletext"
                                style={activeTab === 'events' ? styles.activeText : styles.inactiveText}
                            >
                                Events
                            </AppText>
                        </View>
                        <View style={{ marginTop: -1 }}>


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
                        <View>
                            <AppText
                                variant="profiletext"
                                style={activeTab === 'invitations' ? styles.activeText : styles.inactiveText}
                            >
                                Invitation
                            </AppText>
                        </View>

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
