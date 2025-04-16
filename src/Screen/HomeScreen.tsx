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

const HomeScreen = () => {
    const theme = useTheme();
    const { value } = theme;

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

                <View style={{ paddingHorizontal: 5, paddingTop: 100 }}>
                    <AppText variant='heading' style={{ textAlign: 'center' }}>
                        Effortlessly Plan And Manage Your Invites
                    </AppText>
                    <AppText
                        variant='subheading'
                        style={{ textAlign: 'center', marginHorizontal: 30, marginBottom: 10 }}
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
        flexGrow: 1,
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
        flex: 1,
        zIndex: 1,
        paddingTop: 0,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
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
        marginTop: -100,
    },
    inviteImage3: {
        width: 120,
        height: 350,
        borderRadius: 8,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        alignItems: 'center',
        marginVertical: 30,
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
        textDecorationLine: 'underline',

    },
});

export default HomeScreen;
