import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { useTheme } from '../Hooks/useTheme';
import AppText from './AppText';

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
    const activeColor = value.color.secondary || '#FF0000';

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
            backgroundColor: '#FFFFFF',
        },
        activeText: {
            color: activeColor,
        },
        inactiveText: {
            color: '#A0A0A0',
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
                    <AppText
                        variant='profiletext'
                        style={activeTab === 'events' ? styles.activeText : styles.inactiveText}
                    >
                        Events ({eventCount})
                    </AppText>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleTabChange?.('invitations')}
                    style={[
                        styles.tabButton,
                        activeTab === 'invitations' && styles.activeTabButton,
                    ]}
                >
                    <AppText
                        variant='profiletext'
                        style={activeTab === 'invitations' ? styles.activeText : styles.inactiveText}
                    >
                        Invitation ({invitationCount})
                    </AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default AppHeader;
