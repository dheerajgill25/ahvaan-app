import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { useTheme } from '../Hooks/useTheme';
import AppText from './AppText';

const { width } = Dimensions.get('window');

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

    return (
        <View style={[styles.container, { backgroundColor: activeColor }]}>
            <View style={styles.tabWrapper}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleTabChange && handleTabChange('events')}
                    style={[
                        styles.tabButton,
                        activeTab === 'events' && styles.activeTabButton,
                    ]}
                >
                    <AppText
                        style={[

                            activeTab === 'events' ? styles.activeText : styles.inactiveText,
                        ]}
                    >
                        Events ({eventCount})
                    </AppText>
                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleTabChange && handleTabChange('invitations')}
                    style={[
                        styles.tabButton,
                        activeTab === 'invitations' && styles.activeTabButton,
                    ]}
                >
                    <AppText
                        style={[

                            activeTab === 'invitations' ? styles.activeText : styles.inactiveText,
                        ]}
                    >
                        Invitation ({invitationCount})
                    </AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default AppHeader;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 10,
        marginBottom: 10,
        backgroundColor: '#FF0000',
    },
    tabWrapper: {
        flexDirection: 'row',
        borderRadius: 30,
        marginHorizontal: 25,
        backgroundColor: '#F5F5F5',
        padding: 0,
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
        color: '#FF0000',
    },
    inactiveText: {
        color: '#A0A0A0',
    },
});
