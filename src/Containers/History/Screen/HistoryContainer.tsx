import React, { useCallback, useState } from 'react';
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


import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import FloatingMenu from '../../MyEvents/Modal/FloatingMenu';
import { useFocusEffect } from '@react-navigation/native';


const HistoryContainer = () => {
    const theme = useTheme();
    const { value } = theme;

    const [visible, setVisible] = useState(false);



    const events = [{
        title: "Wedding Party",
        dateTime: "02/27/2025, 11:30 AM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        // source: THEME_DEFAULT_IMAGE.Template.template
        date: "1 Day ago"
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
                        date={event.date}
                        // source={event.source} 
                        onPress={() => NavigationManager.navigationRef.navigate(AppRoute.TABS)}
                    />
                ))
            ) : (
                <>

                    <View style={{ marginTop: 40 }}>
                        <THEME_DEFAULT_IMAGE.Template.error />
                    </View>

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
                            You’ve no History yet!
                        </AppText>
                        <AppText
                            variant='smallText'
                            style={{ textAlign: 'center', marginBottom: 20 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                        </AppText>

                    </View>
                </>
            )}

            <View style={styles.floatingIcon}>
                <TouchableOpacity onPress={() => setVisible(prv => !prv)}>
                    <Icon name="microsoft-xbox-controller-menu" size={35} color={value.color.secondary} />
                </TouchableOpacity>
            </View>

            {visible && (
                <FloatingMenu visible={visible}
                    onclose={() => setVisible(false)}
                    onPress={() => setVisible(false)}

                />)}

        </ScrollView>
    );
};

export default HistoryContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F8',
        padding: 15,
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
        top: -0,
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
