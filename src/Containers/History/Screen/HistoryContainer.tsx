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

const { value, style } = useTheme();
const HistoryContainer = () => {

    const { value, style } = useTheme();

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

                    <View style={{ ...style.gutter.marginBottom.medium }}>
                        <THEME_DEFAULT_IMAGE.Template.error />
                    </View>

                    <View style={styles.noEventContainer}>
                        <AppText
                            variant='HeaderText'
                            style={{
                                color: value.color.black,
                                fontFamily: AppFontFamily.POPPINS_REGULAR,
                                ...style.layout.textAlignCenter,
                                ...style.gutter.marginBottom.small
                            }}
                        >
                            You’ve no History yet!
                        </AppText>
                        <AppText
                            variant='smallText'
                            style={{ ...style.layout.textAlignCenter, ...style.gutter.marginBottom.medium }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                        </AppText>

                    </View>
                </>
            )}

            <View style={styles.floatingIcon}>
                <TouchableOpacity onPress={() => setVisible(prv => !prv)}>
                    <THEME_DEFAULT_IMAGE.IconModal.Manu />
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
        flex: value.metricSize.oneSmall,
        backgroundColor: value.color.GradientBackground,
        ...style.gutter.padding.regular,
    },
    scrollContent: {
        flexGrow: value.metricSize.oneSmall,
        // justifyContent: 'center',
        ...style.layout.alignItemsCenter

    },
    ImgConatiner: {
        flexGrow: value.metricSize.oneSmall,
        width: '100%',
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter

    },
    noEventContainer: {

        ...style.gutter.padding.small,
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter
    },
    floatingIcon: {
        position: 'absolute',
        bottom: value.metricSize.largeSpace + 6,
        right: 0,
    },
});
