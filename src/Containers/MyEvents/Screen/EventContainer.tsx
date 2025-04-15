import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import { useTheme } from '../../../Hooks/useTheme';
import AppText from '../../../Components/AppText';
import { AppFontFamily } from '../../../Theme/Utils';
import AppButton from '../../../Components/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ApplicationCard from '../../../Screen/ApplictionCartScreen';
import AppHeader from '../../../Components/AppHeader';
import InvitationsContainer from './InvitationsContainer';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import FloatingMenu from '../Modal/FloatingMenu';

const EventContainer = () => {
    const theme = useTheme();
    const { value } = theme;

    const [visible, setVisible] = useState(false);
    const events = [{
        title: "Wedding Party",
        dateTime: "02/27/2025, 11:30 AM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        // source: THEME_DEFAULT_IMAGE.Template.template
    }];

    return (
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <ApplicationCard
                        key={index}
                        title={event.title}
                        dateTime={event.dateTime}
                        description={event.description}
                        // source={event.source} 
                        onPress={() => NavigationManager.navigationRef.navigate(AppRoute.TABS)}
                    />
                ))
            ) : (
                <>

                    <THEME_DEFAULT_IMAGE.Template.GroupData></THEME_DEFAULT_IMAGE.Template.GroupData>

                    <View style={styles.noEventContainer}>
                        <AppText
                            variant='HeaderText'
                            style={{
                                color: value.color.black,
                                fontFamily: AppFontFamily.POPPINS_REGULAR,
                                textAlign: 'center',
                                marginBottom: 10
                            }}
                        >
                            You’ve no Events yet!
                        </AppText>
                        <AppText
                            variant='smallText'
                            style={{ textAlign: 'center', marginBottom: 20 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                        </AppText>
                        <AppButton
                            borderRadius={50}
                            variant='secondary'
                            textColor={value.color.white}
                            title='Create Events Now'
                        />
                    </View>
                </>
            )}

            <View style={styles.floatingIcon}>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Icon name="microsoft-xbox-controller-menu" size={35} color={value.color.secondary} />
                </TouchableOpacity>
            </View>

            {visible && (
                <FloatingMenu visible={visible} onclose={() => setVisible(false)} onPress={() => NavigationManager.navigationRef.navigate(AppRoute.HISTORY_CONTAINER)} />
            )}
        </ScrollView>
    );
};

export default EventContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F8',
        padding: 15,
        marginTop: "auto",
        paddingTop: 10
    },
    scrollContent: {
        flexGrow: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },
    ImgConatiner: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noEventContainer: {
        top: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingIcon: {
        position: 'absolute',
        bottom: 60,
        right: 0,
    },
});
