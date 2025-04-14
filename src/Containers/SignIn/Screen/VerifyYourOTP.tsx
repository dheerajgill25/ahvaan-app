import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Hooks/useTheme';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTextInput } from '../../../Components/AppTextInput';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';

import NavigationManager from '../../../Navigator/Component/NavigationManager';
import AppSelect from '../../../Components/AppSelect';
import { AppFontFamily } from '../../../Theme/Utils';
import AppRow from '../../../Components/AppRow';
import { AppRoute } from '../../../Navigator/Component/AppRoute';

const VerifyYourOTP = () => {
    const theme = useTheme();
    const { value, style } = theme;

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
                <TouchableOpacity style={styles.backButton} onPress={() => NavigationManager.navigationRef.goBack()}>
                    <Icon name="chevron-left" size={24} color={"black"} style={{ padding: 10, color: "white" }} />
                </TouchableOpacity>
                <View style={styles.card}>

                    <View style={{ marginBottom: 40 }}>
                        <AppText variant='LoginText' >Verify Your OTP</AppText>
                        <View style={{ marginTop: 50 }}>
                            <AppRow gap='13px'>
                                <View style={styles.OTPInput}>
                                    <AppTextInput
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        value='5'
                                    />
                                </View>

                                <View style={styles.OTPInput}>
                                    <AppTextInput
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        value='5'
                                    />
                                </View>

                                <View style={styles.OTPInput}>
                                    <AppTextInput
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        value='5'
                                    />
                                </View>

                                <View style={styles.OTPInput}>
                                    <AppTextInput
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        value='5'
                                    />
                                </View>

                                <View style={styles.OTPInput}>
                                    <AppTextInput
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        value='5'
                                    />
                                </View>

                                <View style={styles.OTPInput}>
                                    <AppTextInput
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        value='5'
                                    />
                                </View>

                            </AppRow>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10 }}>
                                <AppText variant='smallText'>You didn’t get any code? <Text style={{ color: value.color.black, textDecorationLine: 'underline' }}>Resend</Text> </AppText>

                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: 100 }}>
                        <AppButton
                            title="Send OTP"
                            variant='secondary'
                            textColor={value.color.white}
                            borderRadius={50}
                            onPress={() => NavigationManager.navigationRef.navigate(AppRoute.LOGINSCREEN)}
                        />
                    </View>



                </View>
            </LinearGradient>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
        width: '100%',
        height: '80%',
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
    card: {
        flex: 1,
        marginTop: 180,
        backgroundColor: '#fff',
        borderTopRightRadius: 134,
        padding: 15,
        zIndex: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,

    },
    backButton: {
        marginTop: 10,
    },
    OTPInput: {
        width: 44
    }




});

export default VerifyYourOTP;
