import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImageComponent from '../Components/ImageComponent';
import AppText from '../Components/AppText';
import AppButton from '../Components/AppButton';
import Icon from 'react-native-vector-icons/Entypo';
import { THEME_DEFAULT_IMAGE } from '../Theme/Default/Image';

import { AppFontFamily } from '../Theme/Utils';
import { useTheme } from '../Hooks/useTheme';
import NavigationManager from '../Navigator/Component/NavigationManager';
import { AppRoute } from '../Navigator/Component/AppRoute';
import AppRow from '../Components/AppRow';

const { value, style } = useTheme();
const SplashScreen = () => {


    return (

        <ScrollView contentContainerStyle={styles.container}>
            <LinearGradient
                colors={[value.color.white, value.color.splashlinearcolor]}
                style={styles.container}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <View style={styles.backgroundImagesContainer}>
                    <Image
                        style={styles.backgroundImage1}
                        source={THEME_DEFAULT_IMAGE.AppSplashScreenImages.splashImage1}
                    />

                    <Image
                        style={styles.backgroundImage2}
                        source={THEME_DEFAULT_IMAGE.AppSplashScreenImages.splashImage2}
                    />
                    <Image
                        style={styles.backgroundImage3}
                        source={THEME_DEFAULT_IMAGE.AppSplashScreenImages.splashImage3}
                    />
                </View>
                <View style={styles.cardRow}>
                    <ImageComponent style={styles.inviteImage}
                        source={THEME_DEFAULT_IMAGE.AppHomeScreenImages.inviteImage1}

                    />
                    <ImageComponent style={styles.inviteImage2}
                        source={THEME_DEFAULT_IMAGE.AppHomeScreenImages.inviteImage2}

                    />
                    <ImageComponent style={styles.inviteImage3}
                        source={THEME_DEFAULT_IMAGE.AppHomeScreenImages.inviteImage3}

                    />
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 100 }}>
                    <AppText variant='heading' style={{ ...style.layout.textAlignCenter, ...style.gutter.marginBottom.mini }}>Effortlessly Plan And Manage Your Invites</AppText>
                    <AppText variant='subheading' style={{ ...style.layout.textAlignCenter, ...style.gutter.marginHorizontal.iconSizeLargr, ...style.gutter.marginBottom.small }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </AppText>

                    <AppRow alignItems='center' justifyContent='center'>
                        <AppButton
                            title={"Let’s Get In"}
                            variant='primary'
                            width="40%"
                            borderRadius={50}
                            icon={<Icon name="chevron-right" size={20} color={value.color.secondary} />}
                            onPress={() => NavigationManager.navigationRef.navigate(AppRoute.SIGNINCONTAINER)} />

                    </AppRow>



                    <AppText style={styles.footerText}>
                        By click on “Let’s Get In”, you agree to our{' '}
                        <Text style={styles.linkText}>Privacy Policy</Text> and{' '}
                        <Text style={styles.linkText}>Terms of Service</Text>.
                    </AppText>
                </View>

            </LinearGradient>
        </ScrollView>

    );
};

const styles = StyleSheet.create({

    backgroundImage: {
        flex: value.metricSize.oneSmall,

    },
    container: {
        flex: value.metricSize.oneSmall,

    },
    cardRow: {
        ...style.layout.row,
        ...style.layout.justifyContentBetween,
        ...style.layout.alignItemsCenter,


    },
    hangingCard: {
        ...style.layout.alignItemsCenter,
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

    footerText: {
        fontSize: value.fontSize.footSmall,
        color: value.color.white,
        ...style.gutter.paddingTop.inputHeight,
        ...style.gutter.paddingHorizontal.tiny,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
    },
    linkText: {
        color: value.color.white,
        textDecorationLine: 'underline',
        fontSize: value.fontSize.footSmall,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,

    },

    backgroundImagesContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
    },
    backgroundImage1: {
        position: 'absolute',
        top: -120,
        right: 0,
        width: 487,
        height: 356,
        zIndex: 99,
        resizeMode: 'contain',
    },
    backgroundImage2: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: "100%",
        height: "80%",
        resizeMode: 'contain',
    },
    backgroundImage3: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 343,
        height: 375,
        resizeMode: 'contain',
        zIndex: 3,

    },
});

export default SplashScreen;
