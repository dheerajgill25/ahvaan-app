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
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Hooks/useTheme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTextInput } from '../../../Components/AppTextInput';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import AppRow from '../../../Components/AppRow';
import { CountryPicker } from 'react-native-country-codes-picker';
import { AppFontFamily } from '../../../Theme/Utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

const SignUp = () => {
    const theme = useTheme();
    const { value } = theme;

    const [showPicker, setShowPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: 'India',
        dial_code: '+91',
        code: 'IN',
        flag: '🇮🇳',
    });

    const [phoneNumber, setPhoneNumber] = useState('');

    const [phoneError, setPhoneError] = useState('');


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

            NavigationManager.navigationRef.navigate(AppRoute.LOGINSCREEN);
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
                <View style={styles.cards}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => NavigationManager.navigationRef.goBack()}
                    >
                        <Icon name="chevron-left" size={24} color="white" style={styles.backIcon} />
                    </TouchableOpacity>
                    <AppText variant="LoginText" style={{ color: value.color.white, fontFamily: AppFontFamily.POPPINS_BOLD }}>Sign Up</AppText>
                    <AppText variant='smallText' style={{ color: value.color.white, width: "80%" }}>Please enter the <Text style={{ fontStyle: 'italic', fontWeight: 700 }}>required </Text>
                        information to <Text style={{ fontStyle: 'italic', fontWeight: 700 }}>sign up </Text> to Ahvaan.</AppText>

                </View>



                <View style={styles.card}>
                    <View style={styles.inputContainer}>
                        <AppText variant="smallText" style={styles.inputLabel}>
                            Enter Your Number
                        </AppText>

                        <View style={styles.phoneInputContainer}>
                            <TouchableOpacity
                                onPress={() => setShowPicker(true)}
                                style={styles.countryPickerButton}
                            >
                                <AppRow gap="8" alignItems="center">
                                    <AppText variant="subheading" style={styles.countryText}>
                                        {selectedCountry.flag}
                                    </AppText>
                                    <AppText
                                        variant="subheading"
                                        style={[styles.countryText, styles.dialCode]}
                                    >
                                        {selectedCountry.dial_code}
                                    </AppText>
                                    <FontAwesome name="angle-down" size={18} color="black" />
                                    <View style={styles.separator} />
                                </AppRow>
                            </TouchableOpacity>

                            <View style={styles.phoneNumberInput}>
                                <AppTextInput
                                    Placeholder="Enter Your Number"
                                    keyboardType="phone-pad"
                                    borderRadius={{
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 10,
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 10,
                                    }}
                                    value={phoneNumber}
                                    onChangeText={(text) => {
                                        setPhoneNumber(text);
                                        validatePhoneNumber(text);
                                    }}
                                    maxLength={10}
                                    hideBorderSides={['left']}
                                />
                            </View>
                        </View>

                        {phoneError ? (
                            <AppText variant="subheading" style={styles.errorText}>
                                {phoneError}
                            </AppText>
                        ) : null}
                    </View>

                    <CountryPicker
                        show={showPicker}
                        pickerButtonOnPress={(item) => {
                            setSelectedCountry({
                                name: typeof item.name === 'string' ? item.name : item.name?.common || '',
                                dial_code: item.dial_code,
                                code: item.code,
                                flag: item.flag,
                            });
                            setShowPicker(false);
                        }}
                        onBackdropPress={() => setShowPicker(false)}
                        style={{
                            modal: { height: 400, zIndex: 999 },
                            textInput: { color: 'black' },
                            countryName: { color: 'black' },
                            dialCode: { color: 'black' },
                            flag: { marginRight: 10 },
                        }}
                        lang="en"
                    />
                    <AppButton
                        title="Send OTP"
                        variant="gradient"
                        textColor={value.color.white}
                        borderRadius={50}
                        onPress={handleLogin}
                    />

                    <AppRow alignItems="center" justifyContent="center">
                        <AppText variant="subheading" style={styles.signupText}>
                            Already have an account {" "}
                            <AppText variant="subheading" style={styles.signupLink}>
                                Sign in
                            </AppText>
                        </AppText>
                    </AppRow>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        backgroundColor: "#fff"
    },
    cards: {
        height: height * 0.5,
        backgroundColor: '#A00707',
        justifyContent: 'flex-end',
        paddingBottom: 50,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        zIndex: 1,
        padding: 20,
    },
    card: {
        marginTop: 20,
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        color: "#fff",
        zIndex: 1
    },
    backIcon: {
        padding: 10,
    },
    inputContainer: {
        marginTop: 20,
        paddingBottom: 30
    },
    inputLabel: {
        marginBottom: 5,
        paddingLeft: 5,
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        color: "black"
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryPickerButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 7,
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginRight: -1,
    },
    countryText: {
        color: 'black',
    },
    dialCode: {
        fontFamily: AppFontFamily.POPPINS_BOLD,
    },
    separator: {
        borderLeftColor: '#D9D9D9',
        borderLeftWidth: 1,
        height: 30,
    },
    phoneNumberInput: {
        flex: 1,
    },
    errorText: {
        color: '#FF0000',
        marginTop: 5,
    },


    forgotPinText: {
        textDecorationLine: 'underline',
        color: '#A4A4A4',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
    },
    signupLink: {
        textDecorationLine: 'underline',
        color: '#434343',
        fontFamily: AppFontFamily.POPPINS_SEMI_BOLD
    },
});

export default SignUp;
