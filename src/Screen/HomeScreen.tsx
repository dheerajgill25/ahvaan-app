import React from 'react';
import {
    View,
    Text,

    ScrollView,

    StyleSheet,
    ImageBackground,
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

const HomeScreen = () => {
    const theme = useTheme();
    const { value, style } = theme;
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <LinearGradient
                colors={[value.color.white, value.color.linearcolor]}
                style={styles.container}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <ImageBackground
                    source={THEME_DEFAULT_IMAGE.BackGroundImageScreen.backimage}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
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
                        <AppText variant='heading' style={{ textAlign: 'center', }}>Effortlessly Plan And Manage Your Invites</AppText>
                        <AppText variant='subheading' style={{ textAlign: 'center', marginHorizontal: 30, marginBottom: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </AppText>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: "20px", alignItems: 'center', marginVertical: 30 }}>

                            <AppButton
                                title={"Let’s Get In"}
                                variant='primary'
                                width="40%"
                                borderRadius={50}
                                onPress={() => NavigationManager.navigationRef.navigate(AppRoute.SPLASHSCREEN)}
                                icon={<Icon name="chevron-right" size={20} color="#EC0D12" />} />

                        </View>
                        <AppText style={styles.footerText}>
                            By click on “Let’s Get In”, you agree to our{' '}
                            <Text style={styles.linkText}>Privacy Policy</Text> and{' '}
                            <Text style={styles.linkText}>Terms of Service</Text>.
                        </AppText>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,

    },
    container: {
        flex: 1,

    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    hangingCard: {
        alignItems: 'center',
    },

    inviteImage: {
        width: 120,
        height: 350,
        borderRadius: 8,
    },
    inviteImage2: {
        width: 120,
        height: 250,
        borderRadius: 8,
        marginTop: -100
    },
    inviteImage3: {
        width: 120,
        height: 350,
        borderRadius: 8,
    },

    footerText: {
        fontSize: 10,
        color: '#ffffff',

        paddingHorizontal: 10,
        fontFamily: AppFontFamily.POPPINS_REGULAR,
    },
    linkText: {
        color: '#ffffff',
        fontSize: 10,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
    },
});

export default HomeScreen;
