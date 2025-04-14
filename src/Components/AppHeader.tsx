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
    console.log('onChange prop:', activeTab);
    return (
        <View style={[styles.container, { backgroundColor: value.color.secondary || '#FF0000' }]}>
            <View style={styles.tabContainer}>

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => handleTabChange && handleTabChange('Myevents')}

                    style={styles.tab}
                >
                    <AppText
                        variant="HeaderText"
                        style={[
                            activeTab === 'Myevents' ? styles.activeText : styles.inactiveText,
                        ]}
                    >
                        My Events
                    </AppText>
                    <View style={styles.baseLine} />
                    {activeTab === 'Myevents' && <View style={styles.activeLine} />}
                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => handleTabChange && handleTabChange('Myinvitations')}
                    style={styles.tab}
                >
                    <AppText
                        variant="HeaderText"
                        style={[
                            activeTab === 'Myinvitations' ? styles.activeText : styles.inactiveText,
                        ]}
                    >
                        Invitations({invitationCount})
                    </AppText>
                    <View style={styles.baseLine} />
                    {activeTab === 'Myinvitations' && <View style={styles.activeLine} />}
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
        marginBottom: 10

    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    tab: {
        alignItems: 'center',
        paddingBottom: 6,
        width: width / 2,
        position: 'relative',
        paddingHorizontal: 0,
        marginHorizontal: 0,
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
        height: 4,
        width: '90%',
        backgroundColor: '#DCDCDC',
        borderRadius: 1,
    },
    activeLine: {
        position: 'absolute',
        bottom: 0,

        height: 4,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});
