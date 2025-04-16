import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Hooks/useTheme';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import AppRow from '../../../Components/AppRow';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import { AppTextInput } from '../../../Components/AppTextInput';

const VerifyYourOTP = () => {
    const theme = useTheme();
    const { value } = theme;

    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined = undefined;
        if (timer > 0) {
            setCanResend(false);
            interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = () => {
        if (canResend) {
            console.log('Resending OTP...');
            resendOtpAPI();
            setTimer(30);
        }
    };

    const resendOtpAPI = () => {
        setTimeout(() => {
            console.log('OTP resent successfully');
        }, 1000);
    };

    const handleOTPChange = (text: string, index: number) => {
        if (/^\d*$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);

            if (text && index < 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleOtpSubmit = () => {
        const isValid = otp.every(d => d !== '');
        if (isValid) {
            NavigationManager.navigationRef.navigate(AppRoute.LOGINSCREEN);
        } else {
            Alert.alert('Invalid OTP', 'Please enter all 6 digits of the OTP');
        }
    };

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
                    <Icon name="chevron-left" size={24} color="white" style={{ padding: 10 }} />
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={{ marginBottom: 40 }}>
                        <AppText variant="LoginText">Verify Your OTP</AppText>

                        <View style={{ marginTop: 50 }}>
                            <AppRow gap="13px">
                                {otp.map((digit, index) => (
                                    <View key={index} style={styles.OTPInput}>
                                        <AppTextInput
                                            keyboardType="number-pad"
                                            label=""
                                            backgroundColor={value.color.borderColor}
                                            value={digit}
                                            maxLength={1}
                                            onChangeText={(text) => handleOTPChange(text, index)}
                                            onKeyPress={({ nativeEvent }) => {
                                                if (
                                                    nativeEvent.key === 'Backspace' &&
                                                    otp[index] === '' &&
                                                    index > 0
                                                ) {
                                                    inputRefs.current[index - 1]?.focus();
                                                }
                                            }}
                                            inputRef={(ref: TextInput) => {
                                                inputRefs.current[index] = ref;
                                            }}
                                        />
                                    </View>
                                ))}
                            </AppRow>

                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10 }}>
                                {canResend ? (
                                    <TouchableOpacity onPress={handleResend}>
                                        <AppText variant="smallText">
                                            You didn’t get any code?{' '}
                                            <AppText
                                                variant="smallText"
                                                style={{
                                                    color: value.color.black,
                                                    textDecorationLine: 'underline',
                                                }}
                                            >
                                                Resend
                                            </AppText>
                                        </AppText>
                                    </TouchableOpacity>
                                ) : (
                                    <AppText variant="smallText" style={{ color: value.color.gray }}>
                                        Resend in {timer}s
                                    </AppText>
                                )}
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 100 }}>
                        <AppButton
                            title="Send OTP"
                            variant="secondary"
                            textColor={value.color.white}
                            borderRadius={50}
                            onPress={handleOtpSubmit}
                        />
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
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
        borderTopRightRadius: 104,
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
        width: 44,
    },
});

export default VerifyYourOTP;
