import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import { useTheme } from '../../../Hooks/useTheme';
import AppSelect from '../../../Components/AppSelect';
import { AppTextInput } from '../../../Components/AppTextInput';
import { AppFontFamily } from '../../../Theme/Utils';
import AppRow from '../../../Components/AppRow';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';

const countryCodes = [
    { label: 'India (+91)', value: '+91' },
    { label: 'USA (+1)', value: '+1' },
    { label: 'UK (+44)', value: '+44' },
    { label: 'Australia (+61)', value: '+61' },
    { label: 'Canada (+1)', value: '+1' },
];

const screenHeight = Dimensions.get('window').height;

const LoginVerify = () => {
    const theme = useTheme();
    const { value } = theme;

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
            NavigationManager.navigationRef.navigate(AppRoute.TABSCREEN);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

                <View style={styles.imageContainer}>
                    <View style={{ marginTop: -100 }}>
                        <THEME_DEFAULT_IMAGE.BackGroundImageScreen.GroupCard
                            width="100%"
                            height="90%"
                        />
                    </View>

                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', '#C50104', '#A70003']}
                        locations={[0.1, 0.2, 0.98271, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.overlayGradient}
                    />

                    <View style={styles.formContainer}>
                        <AppText variant="LoginText" style={{ color: value.color.white }}>
                            Sign In
                        </AppText>
                        <View style={{ marginBottom: -15 }}>
                            <AppText
                                variant="smallText"
                                style={{
                                    color: value.color.white,
                                    fontSize: 13,
                                    fontFamily: AppFontFamily.POPPINS_REGULAR,
                                }}
                            >
                                Enter Your WhatsApp Number
                            </AppText>
                        </View>

                        <AppRow alignItems="center">
                            <View style={{ marginTop: 30, top: -10, left: 0, width: 80 }}>
                                <AppSelect
                                    options={countryCodes}
                                    onSelect={(value: string) => setSelectedCountryCode(value)}
                                    labelField="label"
                                    valueField="value"
                                    value={selectedCountryCode}
                                    customBorderRadius={{
                                        borderTopLeftRadius: 30,
                                        borderBottomLeftRadius: 30,
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                    }}
                                    backgroundColor={value.color.white}
                                />
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    borderLeftWidth: 2,
                                    borderLeftColor: '#E7E7E7',
                                }}
                            >
                                <AppTextInput
                                    Placeholder="Enter Your Number"
                                    keyboardType="phone-pad"
                                    label=""
                                    backgroundColor={value.color.white}
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
                                />
                            </View>
                        </AppRow>

                        {phoneError ? (
                            <AppText
                                variant="smallText"
                                style={{ color: value.color.white, marginTop: -10 }}
                            >
                                {phoneError}
                            </AppText>
                        ) : null}

                        <View style={{ width: '100%', marginBottom: 10 }}>
                            <AppTextInput
                                label="Enter Your Password"
                                Placeholder="Enter Your Password"
                                secureTextEntry
                                backgroundColor={value.color.white}
                                borderRadius={{ borderRadius: 30 }}
                                labelColor={value.color.white}
                                value={pin}
                                onChangeText={(text) => {
                                    setPin(text);
                                    validatePin(text);
                                }}
                            />
                        </View>

                        {pinError ? (
                            <AppText
                                variant="smallText"
                                style={{ color: value.color.white, marginTop: -10 }}
                            >
                                {pinError}
                            </AppText>
                        ) : null}

                        <AppRow alignItems="flex-end" justifyContent="flex-end">
                            <TouchableOpacity>
                                <AppText
                                    variant="smallText"
                                    style={{
                                        textDecorationLine: 'underline',
                                        marginTop: 5,
                                        color: value.color.white,
                                    }}
                                >
                                    Forgot PIN?
                                </AppText>
                            </TouchableOpacity>
                        </AppRow>

                        <View style={styles.centerButton}>
                            <AppButton
                                title="Login"
                                variant="primary"
                                width="50%"
                                borderRadius={50}
                                onPress={handleLogin}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginVerify;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
    },
    imageContainer: {
        height: screenHeight,
    },
    overlayGradient: {
        position: 'absolute',
        top: 100,
        width: '100%',
        height: '150%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    formContainer: {
        position: 'absolute',
        top: 320,
        width: '100%',
        paddingHorizontal: 20,
        zIndex: 1,
    },
    centerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
