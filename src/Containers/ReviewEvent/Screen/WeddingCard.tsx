import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../../../Components/AppText';
import AppRow from '../../../Components/AppRow';
import { useTheme } from '../../../Hooks/useTheme';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import { AppFontFamily } from '../../../Theme/Utils';
const { value, style } = useTheme()
const WeddingCard = () => {

    return (
        <View style={{ backgroundColor: value.color.GradientBackground, flex: value.metricSize.oneSmall }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => NavigationManager.navigationRef.navigate(AppRoute.WEDDINGAPPLICTIONCARD)}>
                <View style={styles.card} >
                    <AppRow gap='10' alignItems='center'>
                        <AppText variant='cardTitle' >Wedding Party</AppText>
                        <THEME_DEFAULT_IMAGE.IconModal.Frame width={32}></THEME_DEFAULT_IMAGE.IconModal.Frame>
                    </AppRow>

                    <AppRow gap='10px' style={styles.Dateloc2}>
                        <View style={{ width: value.metricSize.extraLarge }}>
                            <AppText variant='smallText' style={{ color: value.color.black, }}>Host</AppText>
                        </View>
                        <AppText variant='smallText' style={{ color: value.color.black }}>+91 9999999999</AppText>
                    </AppRow>

                    <View style={styles.divider} />

                    <AppRow style={styles.Dateloc2}>
                        <View style={styles.Dateloc}>
                            <AppText variant='smallText' style={{ color: value.color.black }}>Date & Time</AppText>

                        </View>
                        <AppText variant='smallText' style={{ color: value.color.black }}>08/03/2025 , 3.30PM</AppText>
                    </AppRow>

                    <View style={styles.divider} />

                    <AppRow style={styles.Dateloc2} >
                        <View style={styles.Dateloc}>
                            <AppText variant='smallText' style={{ color: value.color.black }}>Location</AppText>
                        </View>

                        <AppText variant='smallText' style={{ color: value.color.black, width: "70%" }}>
                            Vaishali Nagar, Gautam Marg, Jaipur, Rajasthan, 302016, India
                        </AppText>
                    </AppRow>

                    <View style={styles.divider} />

                    <AppRow style={styles.Dateloc2}>
                        <View style={styles.Dateloc}>
                            <AppText variant='smallText' style={{ color: value.color.black }}>Message</AppText>

                        </View>
                        <AppText variant='smallText' style={{ color: value.color.black }}>Welcome</AppText>
                    </AppRow>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: value.color.white,
        borderRadius: value.metricSize.smallEx,
        ...style.gutter.padding.regularEx,
        elevation: value.metricSize.oneSmall,
        ...style.gutter.margin.regular,

        shadowColor: value.color.bColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: value.metricSize.tinySmall,
    },
    title: {
        fontSize: value.metricSize.regularEx,
        fontFamily: AppFontFamily.POPPINS_BOLD,
    },

    divider: {
        height: value.metricSize.oneSmall,
        backgroundColor: value.color.bordercolor,
        ...style.gutter.marginVertical.mini

    },
    Dateloc: {
        width: value.metricSize.extraLarge + 15,
    },
    Dateloc2: {
        ...style.gutter.marginVertical.tiny
    },
});

export default WeddingCard;
