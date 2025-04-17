import React, { useState } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useTheme } from '../../../Hooks/useTheme';
import { AppTextInput } from '../../../Components/AppTextInput';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import AppRow from '../../../Components/AppRow';
import { AppFontFamily } from '../../../Theme/Utils';
import CountrySelector from '../../../Components/CountrySelector';
import VerifyYourOTPModal from './VerifyYourOTP';

const { height } = Dimensions.get('window');
const { value, style } = useTheme();
const SignUp = () => {

    const { value } = useTheme();

    const [showPicker, setShowPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'India',
        dial_code: '+91',
        code: 'IN',
        flag: '🇮🇳',
    });

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const validatePhoneNumber = (number: string) => {
        const phoneRegex = /^\d{10}$/;
        if (!number) {
            setPhoneError('Number is required');
            return false;
        } else if (!phoneRegex.test(number)) {
            setPhoneError('Please enter a valid 10-digit Number');
            return false;
        }
        setPhoneError('');
        return true;
    };

    const handleLogin = () => {
        const isPhoneValid = validatePhoneNumber(phoneNumber);
        if (isPhoneValid) {
            setShowModal(true)
        }
    };

    return (
        <KeyboardAvoidingView

            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 5}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >

                <View style={styles.cards}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => NavigationManager.navigationRef.goBack()}
                    >
                        <Icon name="angle-left" size={24} color="white" style={styles.backIcon} />
                    </TouchableOpacity>
                    <AppText variant="LoginText" style={{ color: value.color.white, fontFamily: AppFontFamily.POPPINS_BOLD }}>Sign Up</AppText>
                    <AppText variant='smallText' style={{ color: value.color.white, width: "80%" }}>
                        Please enter the <Text style={{ fontStyle: 'italic', fontWeight: '700' }}>required </Text>
                        information to <Text style={{ fontStyle: 'italic', fontWeight: '700' }}>sign up </Text>
                        to Ahvaan.
                    </AppText>
                </View>

                <View style={styles.card}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <View style={styles.inputContainer}>
                            <AppText variant="smallText" style={styles.inputLabel}>
                                Enter Your Number
                            </AppText>

                            <View style={styles.phoneInputContainer}>
                                <View
                                    style={[
                                        styles.phoneInputWrapper,
                                        phoneError ? styles.phoneInputWrapperError : null
                                    ]}
                                >
                                    <CountrySelector
                                        showPicker={showPicker}
                                        setShowPicker={setShowPicker}
                                        selectedCountry={selectedCountry}
                                        setSelectedCountry={setSelectedCountry}
                                    />

                                    <View style={styles.phoneNumberInput}>
                                        <AppTextInput
                                            Placeholder="Enter Your Number"
                                            keyboardType="phone-pad"
                                            borderRadius={{
                                                borderTopLeftRadius: 0,
                                                borderBottomLeftRadius: value.metricSize.small,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: value.metricSize.small,
                                            }}
                                            value={phoneNumber}
                                            onChangeText={(text) => {
                                                setPhoneNumber(text);
                                                validatePhoneNumber(text);
                                            }}
                                            maxLength={value.metricSize.small}
                                            hideBorderSides={['left']}
                                        />
                                    </View>
                                </View>
                            </View>

                            {phoneError ? (
                                <AppText variant="subheading" style={styles.errorText}>
                                    {phoneError}
                                </AppText>
                            ) : null}
                        </View>

                        <AppButton
                            title="Send OTP"
                            variant="gradient"
                            textColor={value.color.white}
                            borderRadius={value.metricSize.inputHeight}
                            onPress={handleLogin}
                        />

                        <AppRow alignItems="center" justifyContent="center">
                            <AppText variant="subheading" style={styles.signupText}>
                                Already have an account{" "}
                                <AppText variant="subheading" style={styles.signupLink}>
                                    Sign in
                                </AppText>
                            </AppText>
                        </AppRow>
                    </ScrollView>
                </View>
            </ScrollView>
            <VerifyYourOTPModal isVisible={showModal} onClose={() => setShowModal(false)} />
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        backgroundColor: value.color.white,
    },
    cards: {
        height: height * 0.5,
        backgroundColor: value.color.ActiveColor,
        ...style.layout.justifyContentEnd,
        ...style.gutter.paddingBottom.inputHeight,
        borderBottomRightRadius: value.metricSize.tableRowHeight + 3,
        borderBottomLeftRadius: value.metricSize.tableRowHeight + 3,
        ...style.gutter.padding.medium
    },
    card: {
        ...style.gutter.marginTop.medium,
        ...style.gutter.padding.medium,
    },
    backButton: {

        position: 'absolute',
        top: value.metricSize.small,
        color: value.color.white,
        zIndex: 1,
    },
    backIcon: {
        ...style.gutter.padding.small,
    },
    inputContainer: {
        ...style.gutter.marginTop.medium,
        ...style.gutter.paddingBottom.medium,
    },
    inputLabel: {
        ...style.gutter.marginBottom.tiny,
        ...style.gutter.paddingLeft.tiny,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        color: value.color.black,
    },
    phoneInputContainer: {
        ...style.layout.row,
        ...style.layout.alignItemsCenter,
    },
    phoneNumberInput: {
        flex: 1,
    },
    errorText: {
        color: value.color.secondary,
        ...style.gutter.marginTop.tiny,
    },
    signupText: {
        ...style.gutter.marginTop.medium,
        ...style.layout.textAlignCenter,
        color: value.color.black,
    },
    signupLink: {
        textDecorationLine: 'underline',
        color: value.color.black,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
    },
    phoneInputWrapper: {
        ...style.layout.row,
        ...style.layout.alignItemsCenter,
        borderRadius: value.metricSize.small,
        overflow: 'hidden',
        borderWidth: value.metricSize.one,
        borderColor: value.color.line,
    },

    phoneInputWrapperError: {
        borderColor: value.color.secondary,
    },
});

export default SignUp;
