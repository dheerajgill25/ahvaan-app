import React, { useRef, useState } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Hooks/useTheme';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { AppTextInput } from '../../../Components/AppTextInput';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import AppRow from '../../../Components/AppRow';
import { CountryPicker } from 'react-native-country-codes-picker';
import { AppFontFamily } from '../../../Theme/Utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CountrySelector from '../../../Components/CountrySelector';

const { height } = Dimensions.get('window');
const { value, style } = useTheme();
const SignInContainer = () => {

    const { value } = useTheme();

    const [showPicker, setShowPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'India',
        dial_code: '+91',
        code: 'IN',
        flag: '🇮🇳',
    });
    const phoneInputRef = useRef(null);
    const pinInputRef = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pin, setPin] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [pinError, setPinError] = useState('');

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
        <KeyboardAvoidingView

            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ flexGrow: 1 }}>
                    <View style={styles.cards}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => NavigationManager.navigationRef.goBack()}
                        >
                            <Icon name="angle-left" size={24} color="white" style={styles.backIcon} />
                        </TouchableOpacity>
                        <AppText variant="LoginText" style={{ color: value.color.white, fontFamily: AppFontFamily.POPPINS_BOLD }}>Sign In</AppText>
                        <AppText variant='LoginText' style={{ color: value.color.white, fontFamily: AppFontFamily.POPPINS_BOLD }}>Welcome Back !</AppText>
                    </View>

                    <View style={styles.card}>
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
                                            maxLength={10}
                                            hideBorderSides={['left']}
                                            placeholderTextColor={value.color.danger}
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

                        <AppTextInput
                            label="Enter Your PIN"
                            Placeholder="Enter Your PIN"
                            secureTextEntry
                            borderRadius={{ borderRadius: value.metricSize.small }}
                            maxLength={value.metricSize.tinySmall}
                            value={pin}
                            onChangeText={(text) => {
                                setPin(text);
                                validatePin(text);
                            }}
                            keyboardType="numeric"
                            errorText={pinError}

                        />

                        <TouchableOpacity style={styles.forgotPin}>
                            <AppText variant="subheading" style={styles.forgotPinText}>
                                Forgot PIN?
                            </AppText>
                        </TouchableOpacity>

                        <AppButton
                            title="Log In"
                            variant="gradient"
                            textColor={value.color.white}
                            borderRadius={value.metricSize.inputHeight}
                            onPress={handleLogin}
                        />

                        <AppRow alignItems="center" justifyContent="center">
                            <AppText variant="subheading" style={styles.signupText}>
                                If you don't have an account?{' '}
                                <AppText variant="subheading" style={styles.signupLink}>
                                    Sign Up
                                </AppText>
                            </AppText>
                        </AppRow>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: value.color.white,
    },
    cards: {
        height: height * 0.4,
        backgroundColor: value.color.ActiveColor,
        justifyContent: 'flex-end',
        ...style.gutter.paddingBottom.tableRowHeight,
        borderBottomRightRadius: value.metricSize.tableRowHeight,
        borderBottomLeftRadius: value.metricSize.tableRowHeight,
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

    },
    backIcon: {
        ...style.gutter.padding.small,
        ...style.gutter.marginLeft.mini,
    },
    inputContainer: {

        ...style.gutter.marginTop.medium,
        ...style.gutter.paddingBottom.iconSizeLargr
    },
    inputLabel: {
        ...style.gutter.marginBottom.tiny,
        ...style.gutter.paddingLeft.tiny,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        color: value.color.black
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

    forgotPin: {
        ...style.gutter.marginTop.small,
        ...style.layout.alignItemsEnd,
        ...style.gutter.marginBottom.iconSizeLargr,
    },
    forgotPinText: {
        textDecorationLine: 'underline',
        color: value.color.grayaunderline,
    },
    signupText: {

        ...style.layout.textAlignCenter,
        ...style.gutter.marginTop.medium,
        color: value.color.black,
    },
    signupLink: {
        textDecorationLine: 'underline',
        color: value.color.black,
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

export default SignInContainer;
