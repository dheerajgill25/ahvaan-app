import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import EventContainer from '../Containers/MyEvents/Screen/EventContainer';
import InvitationsContainer from '../Containers/MyEvents/Screen/InvitationsContainer';
import AppHeader from './AppHeader';
import ActiveHeader from './ActiveHeader';
import EventsData from '../Containers/MyEvents/Screen/EventsData';

const Tab = () => {

    const [activeTabs, setActiveTabs] = useState<'events' | 'invitations'>('events');

    return (
        <View style={styles.container}>
            <ActiveHeader
                activeTab={activeTabs}
                handleTabChange={setActiveTabs}
                invitationCount={0}
            />

            {activeTabs === 'events' ? (
                <EventsData />
            ) : (
                <InvitationsContainer />
            )}




        </View>
    );
};

export default Tab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
