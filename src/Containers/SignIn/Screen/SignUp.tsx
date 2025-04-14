import React, { useState } from 'react';
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
import { AppRoute } from '../../../Navigator/Component/AppRoute';
const countryCodes = [
    { label: 'India (+91)', value: '+91' },
    { label: 'USA (+1)', value: '+1' },
    { label: 'UK (+44)', value: '+44' },
    { label: 'Australia (+61)', value: '+61' },
    { label: 'Canada (+1)', value: '+1' },

];
const SignUp = () => {
    const theme = useTheme();
    const { value, style } = theme;
    const [phoneNumber, setPhoneNumber] = useState('');

    const [phoneError, setPhoneError] = useState('');

    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].value);
    const validatePhoneNumber = (number: any) => {

        const phoneRegex = /^\d{10}$/;
        if (!number) {
            setPhoneError('WhatsAapp Number is required');
            return false;
        } else if (!phoneRegex.test(number)) {
            setPhoneError('Please enter a valid 10-digit WhatsAapp Number');
            return false;
        }
        setPhoneError('');
        return true;
    };


    const handleSignUp = () => {
        const isPhoneValid = validatePhoneNumber(phoneNumber);


        if (isPhoneValid) {
            NavigationManager.navigationRef.navigate(AppRoute.VERIFYOTP);
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
                        <AppText variant='LoginText' >Sign Up</AppText>
                        <View style={{ marginTop: 30 }}>
                            <View style={{ marginBottom: -15 }}>
                                <AppText variant='smallText' style={{ color: "black", fontSize: 13, fontFamily: AppFontFamily.POPPINS_REGULAR }}>Enter Your WhatsAapp Number</AppText>
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
                                    flex: 1, borderLeftWidth: 2,
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
                                    />

                                </View>

                            </View>
                            {phoneError ? (
                                <AppText variant='smallText' style={{ color: value.color.danger, marginTop: 0 }}>
                                    {phoneError}
                                </AppText>
                            ) : null}
                        </View>
                    </View>
                    <View style={{ marginTop: 100 }}>
                        <AppButton
                            title="Send OTP"
                            variant='secondary'
                            textColor={value.color.white}
                            borderRadius={50}
                            onPress={handleSignUp}
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





});

export default SignUp;
