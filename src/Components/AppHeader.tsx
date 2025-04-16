import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { useTheme } from '../Hooks/useTheme';
import AppText from './AppText';
import AppRow from './AppRow';

const { width } = Dimensions.get('window');

interface Props {
    activeTab?: 'Myevents' | 'Myinvitations';
    handleTabChange?: (tab: 'Myevents' | 'Myinvitations') => void;
    invitationCount?: number;
}

const AppHeader: React.FC<Props> = React.memo(({
    activeTab = 'Myevents',
    handleTabChange,
    invitationCount = 0,
}) => {
    const { value } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: value.color.secondary || '#FF0000' }]}>
            <View style={styles.tabWrapper}>
                <AppRow alignItems='center' justifyContent='space-between' style={styles.tabRow}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => handleTabChange && handleTabChange('Myevents')}
                        style={styles.tab}
                    >
                        <AppText
                            variant="profiletext"
                            style={[activeTab === 'Myevents' ? styles.activeText : styles.inactiveText]}
                        >
                            My Events
                        </AppText>
                        {activeTab === 'Myevents' && <View style={styles.activeLine} />}
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => handleTabChange && handleTabChange('Myinvitations')}
                        style={styles.tab}
                    >
                        <AppText
                            variant="profiletext"
                            style={[activeTab === 'Myinvitations' ? styles.activeText : styles.inactiveText]}
                        >
                            Invitations({invitationCount})
                        </AppText>
                        {activeTab === 'Myinvitations' && <View style={styles.activeLine} />}
                    </TouchableOpacity>
                </AppRow>
                <View style={styles.baseLine} />
            </View>
        </View>
    );
});

export default AppHeader;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: 'center',
    },
    tabWrapper: {
        position: 'relative',
        width: width * 0.8,
    },
    tabRow: {
        justifyContent: 'space-between',
    },
    tab: {
        alignItems: 'center',
        paddingBottom: 8,
        flex: 1,
    },
    activeText: {
        color: '#fff',
    },
    inactiveText: {
        color: '#DCDCDC',
    },
    baseLine: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: '#DCDCDC',
        borderRadius: 1,
        zIndex: -1
    },
    activeLine: {
        position: 'absolute',
        bottom: 0,
        height: 4,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});
