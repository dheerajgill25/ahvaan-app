import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImageComponent from '../Components/ImageComponent';
import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';
import Icon from 'react-native-vector-icons/Entypo';
import { AppFontFamily } from '../Theme/Utils';
import NavigationManager from '../Navigator/Component/NavigationManager';
import { AppRoute } from '../Navigator/Component/AppRoute';
import { THEME_DEFAULT_IMAGE } from '../Theme/Default/Image';
import { useTheme } from '../Hooks/useTheme';
const { value, style } = useTheme();
const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.backgroundWrapper}>
                <LinearGradient
                    colors={[value.color.white, value.color.linearcolor]}
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <THEME_DEFAULT_IMAGE.BackGroundImageScreen.backimage style={styles.backgroundImage} />
            </View>

            <View style={styles.content}>
                <View style={styles.cardRow}>
                    <ImageComponent
                        style={styles.inviteImage}
                        source={THEME_DEFAULT_IMAGE.AppHomeScreenImages.inviteImage1}
                    />

                    <ImageComponent
                        style={styles.inviteImage2}
                        source={THEME_DEFAULT_IMAGE.AppHomeScreenImages.inviteImage2}
                    />
                    <ImageComponent
                        style={styles.inviteImage3}
                        source={THEME_DEFAULT_IMAGE.AppHomeScreenImages.inviteImage3}
                    />
                </View>

                <View style={{ ...style.gutter.paddingHorizontal.tiny, ...style.gutter.paddingTop.extraLarge }}>
                    <AppText variant='heading' style={{ textAlign: 'center' }}>
                        Effortlessly Plan And Manage Your Invites
                    </AppText>
                    <AppText
                        variant='subheading'
                        style={{ ...style.layout.textAlignCenter, ...style.gutter.marginHorizontal.iconSizeLargr, ...style.gutter.marginBottom.small }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </AppText>

                    <View style={styles.buttonRow}>
                        <AppButton
                            title={"Let’s Get In"}
                            variant='primary'
                            width="40%"
                            borderRadius={50}
                            onPress={() => NavigationManager.navigationRef.navigate(AppRoute.SPLASHSCREEN)}
                            icon={<Icon name="chevron-right" size={20} color="#EC0D12" />}
                        />
                    </View>

                    <AppText style={styles.footerText}>
                        By clicking on “Let’s Get In”, you agree to our{' '}
                        <Text style={styles.linkText}>Privacy Policy</Text> and{' '}
                        <Text style={styles.linkText}>Terms of Service</Text>.
                    </AppText>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: value.metricSize.oneSmall,
    },
    backgroundWrapper: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    content: {
        flex: value.metricSize.oneSmall,
        zIndex: value.metricSize.oneSmall,
        paddingTop: 0,
    },
    cardRow: {
        ...style.layout.row,
        ...style.layout.justifyContentBetween,
        ...style.layout.alignItemsCenter,
        zIndex: value.metricSize.oneSmall,
    },
    inviteImage: {
        width: value.metricSize.extraLarge + 20,
        height: value.metricSize.bigextraLarge,
        borderRadius: value.metricSize.mini,
        bottom: value.metricSize.mini,
    },
    inviteImage2: {
        width: value.metricSize.extraLarge + 20,
        height: value.metricSize.bigextraLarge - 100,
        borderRadius: value.metricSize.mini,
        bottom: value.metricSize.choiceHeight,
    },
    inviteImage3: {
        width: value.metricSize.extraLarge + 20,
        height: value.metricSize.bigextraLarge,
        borderRadius: value.metricSize.mini,
        bottom: value.metricSize.mini,
    },
    buttonRow: {
        ...style.layout.row,
        ...style.layout.justifyContentCenter,
        ...style.layout.alignItemsCenter,
        ...style.gutter.marginVertical.iconSizeLargr,
    },
    footerText: {
        fontSize: value.fontSize.footSmall,
        color: value.color.white,
        ...style.gutter.paddingHorizontal.small,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
    },
    linkText: {
        color: value.color.white,
        fontSize: value.fontSize.footSmall,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        textDecorationLine: 'underline',

    },
});

export default HomeScreen;
