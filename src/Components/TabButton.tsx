import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import EventContainer from '../Containers/MyEvents/Screen/EventContainer';
import InvitationsContainer from '../Containers/MyEvents/Screen/InvitationsContainer';
import AppHeader from './AppHeader';
import ActiveHeader from './ActiveHeader';

const TabButton = () => {
    const [activeTab, setActiveTab] = useState<'events' | 'invitations'>('events');



    return (
        <View style={styles.container}>
            <ActiveHeader
                activeTab={activeTab}
                handleTabChange={setActiveTab}
                invitationCount={3}
            />
            {activeTab === 'events' ? (
                <EventContainer />
            ) : (
                <InvitationsContainer />
            )}
        </View>
    );
};

export default TabButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
