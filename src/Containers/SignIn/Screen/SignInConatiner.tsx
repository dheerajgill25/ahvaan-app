import React, { useState } from 'react'; // Added useState for form state
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    TextInput,
    Alert // Added Alert for error messages
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Hooks/useTheme';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTextInput } from '../../../Components/AppTextInput';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import { StyleProps } from '../../../Components/Props';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import AppSelect from '../../../Components/AppSelect';

import { AppRoute } from '../../../Navigator/Component/AppRoute';
import AppRow from '../../../Components/AppRow';
const countryCodes = [
    { label: 'India (+91)', value: '+91' },
    { label: 'USA (+1)', value: '+1' },
    { label: 'UK (+44)', value: '+44' },
    { label: 'Australia (+61)', value: '+61' },
    { label: 'Canada (+1)', value: '+1' },

];
const SignInConatiner = () => {
    const theme = useTheme();
    const { value, style } = theme;

    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].value);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [pin, setPin] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [pinError, setPinError] = useState('');


    const validatePhoneNumber = (number: any) => {

        const phoneRegex = /^\d{10}$/;
        if (!number) {
            setPhoneError('WhatsApp Number is required');
            return false;
        } else if (!phoneRegex.test(number)) {
            setPhoneError('Please enter a valid 10-digit WhatsApp Number');
            return false;
        }
        setPhoneError('');
        return true;
    };

    const validatePin = (pinValue: string) => {
        if (!pinValue) {
            setPinError('PIN is required');
            return false;
        } else if (pinValue.length < 4) {
            setPinError('PIN must be at least 4 digits');
            return false;
        }
        setPinError('');
        return true;
    };


    const handleLogin = () => {
        const isPhoneValid = validatePhoneNumber(phoneNumber);
        const isPinValid = validatePin(pin);

        if (isPhoneValid && isPinValid) {
            NavigationManager.navigationRef.navigate(AppRoute.SIGNINUP);
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
                    <Icon name="chevron-left" size={24} color={"black"} style={{ padding: 10, color: "white" }} />
                </TouchableOpacity>
                <View style={styles.card}>
                    <View style={{ marginBottom: 20 }}>
                        <AppText variant='LoginText'>Sign In</AppText>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ marginBottom: -15 }}>
                                <AppText variant='smallText' style={{ color: "black" }}>
                                    Enter Your WhatsApp Number
                                </AppText>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                <View style={{ marginTop: 30, left: 0, top: -10, width: 80 }}>
                                    <AppSelect

                                        options={countryCodes}
                                        onSelect={(value: string) =>
                                            setSelectedCountryCode(value)
                                        }
                                        labelField="label"
                                        valueField="value"
                                        value={selectedCountryCode}
                                        customBorderRadius={{
                                            borderTopLeftRadius: 30,
                                            borderBottomLeftRadius: 30,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0,
                                        }}


                                    />
                                </View>
                                <View style={{
                                    flex: 1,
                                    borderLeftWidth: 2,
                                    borderLeftColor: "#E7E7E7",
                                }}>
                                    <AppTextInput
                                        Placeholder="Enter Your Number"
                                        keyboardType="phone-pad"
                                        label=""
                                        backgroundColor={value.color.borderColor}
                                        borderRadius={{
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 30,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 30,
                                        }}
                                        value={phoneNumber}
                                        onChangeText={(text) => {
                                            setPhoneNumber(text);
                                            validatePhoneNumber(text);
                                        }}
                                        maxLength={10}
                                    // errorText={phoneError}
                                    />
                                </View>
                            </View>
                            {phoneError ? (
                                <AppText variant='smallText' style={{ color: value.color.danger, marginTop: -10 }}>
                                    {phoneError}
                                </AppText>
                            ) : null}
                        </View>
                    </View>
                    <AppTextInput
                        label='Enter Your PIN'
                        Placeholder="Enter Your PIN"
                        secureTextEntry
                        backgroundColor={value.color.borderColor}
                        borderRadius={{
                            borderRadius: 30,
                        }}
                        value={pin}
                        onChangeText={(text) => {
                            setPin(text);
                            validatePin(text);
                        }}
                        keyboardType="numeric"
                        errorText={pinError}
                    />

                    <TouchableOpacity style={styles.forgotPin}>
                        <AppText variant='smallText' style={{ textDecorationLine: 'underline' }}>
                            Forgot PIN?
                        </AppText>
                    </TouchableOpacity>
                    <AppButton
                        title="Log In"
                        variant='secondary'
                        textColor={value.color.white}
                        borderRadius={50}
                        onPress={handleLogin}
                    />
                    <AppRow justifyContent='flex-end' alignItems='flex-end'>
                        <AppText variant='smallText' style={styles.signupText}>
                            If you don't have an account?{' '}
                            <AppText variant='smallText' style={styles.signupLink}>
                                Sign Up
                            </AppText>
                        </AppText>
                    </AppRow>
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
    forgotPin: {
        marginTop: 6,
        alignItems: 'flex-end',
        marginBottom: 40,
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 30,
    },
    signupLink: {
        textDecorationLine: 'underline',
        color: '#000000',
    },
});

export default SignInConatiner;