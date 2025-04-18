import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import { useTheme } from '../../../Hooks/useTheme';
import { AppTextInput } from '../../../Components/AppTextInput';
import AppRow from '../../../Components/AppRow';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import CountrySelector from '../../../Components/CountrySelector';
import { AppFontFamily } from '../../../Theme/Utils';

const screenHeight = Dimensions.get('window').height;
const { value, style } = useTheme();
const LoginVerify = () => {
    const { value } = useTheme();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [pin, setPin] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [pinError, setPinError] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'India',
        dial_code: '+91',
        code: 'IN',
        flag: '🇮🇳',
    });

    const validatePhoneNumber = (num: string) => {
        const isValid = /^\d{10}$/.test(num);
        setPhoneError(!num ? 'Number is required' : !isValid ? 'Enter valid 10-digit number' : '');
        return !!num && isValid;
    };

    const validatePin = (pinVal: string) => {
        setPinError(!pinVal ? 'Password is required' : '');
        return !!pinVal;
    };

    const handleLogin = () => {
        if (validatePhoneNumber(phoneNumber) && validatePin(pin)) {
            NavigationManager.navigationRef.navigate(AppRoute.TABSCREEN);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <View style={styles.imageContainer}>
                    <View style={styles.backgroundImage}>
                        <THEME_DEFAULT_IMAGE.BackGroundImageScreen.GroupCard width="100%" height="90%" />
                    </View>
                    <LinearGradient
                        colors={[value.color.line, value.color.ActiveColor, value.color.ActiveColor]}
                        locations={[0.1, 0.2, 0.98271, 1]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.overlayGradient}
                    />

                    <View style={styles.formContainer}>
                        <AppText variant="LoginText" style={[styles.textWhite, styles.boldText]}>
                            Sign In
                        </AppText>

                        <View style={styles.formSpacing}>
                            <AppText variant="smallText" style={[styles.textWhite, styles.semiBoldText]}>
                                Enter Your WhatsApp Number
                            </AppText>

                            <AppRow alignItems="center">
                                <View style={styles.countryPicker}>
                                    <CountrySelector {...{ showPicker, setShowPicker, selectedCountry, setSelectedCountry }} />
                                </View>

                                <View style={styles.inputFlex}>
                                    <AppTextInput
                                        Placeholder="Enter Your Number"
                                        keyboardType="phone-pad"
                                        backgroundColor={value.color.white}
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
                            </AppRow>
                            {!!phoneError && <AppText variant="smallText" style={styles.errorText}>{phoneError}</AppText>}

                            <View style={styles.passwordInput}>
                                <AppTextInput
                                    label="Enter Your Password"
                                    Placeholder="Enter Your Password"
                                    secureTextEntry
                                    backgroundColor={value.color.white}
                                    borderRadius={{ borderRadius: value.metricSize.small }}
                                    labelColor={value.color.white}
                                    value={pin}
                                    onChangeText={(text) => {
                                        setPin(text);
                                        validatePin(text);
                                    }}
                                />
                            </View>
                            {!!pinError && <AppText variant="smallText" style={styles.errorText}>{pinError}</AppText>}

                            <AppRow alignItems="flex-end" justifyContent="flex-end">
                                <TouchableOpacity>
                                    <AppText variant="subheading" style={styles.forgotText}>Forgot PIN?</AppText>
                                </TouchableOpacity>
                            </AppRow>

                            <View style={styles.centerButton}>
                                <AppButton title="Login" variant="primary" width="50%" borderRadius={value.metricSize.extraLarge} onPress={handleLogin} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginVerify;

const styles = StyleSheet.create({
    flex: { flexGrow: value.metricSize.oneSmall },
    container: { flexGrow: value.metricSize.oneSmall, backgroundColor: value.color.white },
    imageContainer: { height: screenHeight },
    backgroundImage: { marginTop: -100 },
    overlayGradient: {
        position: 'absolute',
        top: value.metricSize.extraLarge,
        width: '100%',
        height: '150%',
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        ...style.gutter.paddingVertical.medium,
    },
    formContainer: {
        position: 'absolute',
        top: 320,
        width: '100%',
        ...style.gutter.paddingHorizontal.medium,
        zIndex: value.metricSize.oneSmall,
    },
    formSpacing: { ...style.gutter.paddingTop.medium },
    countryPicker: { width: value.metricSize.choiceHeight + 10, ...style.gutter.marginTop.medium },
    inputFlex: { flex: value.metricSize.oneSmall, ...style.gutter.marginTop.medium, marginLeft: 0 },
    passwordInput: { width: '100%', ...style.gutter.marginVertical.medium },
    textWhite: { color: value.color.white, ...style.gutter.marginTop.tiny, marginBottom: -18 },
    errorText: { color: value.color.white, ...style.gutter.marginTop.tiny, ...style.gutter.paddingLeft.small },
    forgotText: { textDecorationLine: 'underline', ...style.gutter.marginTop.tiny, color: value.color.white },
    boldText: { fontFamily: AppFontFamily.POPPINS_BOLD },
    semiBoldText: { fontFamily: AppFontFamily.POPPINS_SEMI_BOLD },
    centerButton: {
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        ...style.gutter.marginTop.medium
    },
});
