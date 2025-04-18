import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '../../../Hooks/useTheme';

import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import AppRow from '../../../Components/AppRow';
import { AppFontFamily } from '../../../Theme/Utils';
import { Text } from 'react-native-gesture-handler';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';

const { value, style } = useTheme();
const VerifyYourOTPModal = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {

    const { value } = useTheme();

    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            setCanResend(false);
            interval = setInterval(() => setTimer(prev => prev - 1), 1000);
        } else {
            setCanResend(true);
        }

        return () => clearInterval(interval);
    }, [timer]);

    // useEffect(() => {
    //     if (inputRefs.current[0]) {
    //         inputRefs.current[0].focus();
    //     }
    // }, []);

    const handleResend = () => {
        if (canResend) {
            setTimer(30);
            setTimeout(() => console.log('OTP resent successfully'), 1000);
        }
    };

    const handleOTPChange = (text: string, index: number) => {
        if (/^\d*$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);

            if (text && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleOtpSubmit = () => {
        console.log('OTP array:', otp);
        const isValid = otp.every(d => d !== '');
        if (isValid) {
            onClose();
            setTimeout(() => {
                NavigationManager.navigationRef.navigate(AppRoute.LOGINSCREEN);
            }, 300);
        } else {
            Alert.alert('Invalid OTP', 'Please enter all 6 digits of the OTP');
        }
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modal}
            swipeDirection="down"
            backdropColor="black"
            backdropOpacity={0.3}
            onSwipeComplete={onClose}
        >

            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.backButton} onPress={onClose}>
                    <Text style={{ textAlign: 'center' }} ></Text>
                </TouchableOpacity>
                <View style={{ padding: value.metricSize.regularXs + 1 }}>


                    <View style={{ marginBottom: value.metricSize.iconSizeLargr }}>
                        <AppText style={{ fontSize: value.fontSize.regular, color: value.color.black, fontFamily: AppFontFamily.POPPINS_BOLD }}>
                            Verify Details

                        </AppText>
                        <AppText variant='smallText'>Otp Sent to +91-8824104115</AppText>
                    </View>

                    <AppRow gap="13px">
                        {otp.map((digit, index) => (
                            <View key={index} style={styles.OTPInput}>
                                <TextInput
                                    keyboardType="number-pad"
                                    style={styles.OTPTextInput}
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
                                    ref={(ref) => {
                                        if (ref) inputRefs.current[index] = ref;
                                    }}
                                />
                            </View>
                        ))}
                    </AppRow>

                    <View style={styles.resendContainer}>
                        {canResend ? (
                            <TouchableOpacity onPress={handleResend}>
                                <AppText variant="smallText" style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_REGULAR }}>
                                    Didn’t receive the OTP?{" "}
                                    <AppText
                                        variant="smallText"
                                        style={styles.resendText}
                                    >
                                        Resend
                                    </AppText>
                                </AppText>
                            </TouchableOpacity>
                        ) : (
                            <AppText variant="smallText" style={styles.timerText}>
                                Didn’t receive the OTP?  {timer}s
                            </AppText>
                        )}
                    </View>

                    <View style={styles.buttonContainer}>
                        <AppButton
                            title="VERIFY AND PROCEED"
                            variant="gradient"
                            textColor={value.color.white}
                            onPress={handleOtpSubmit}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        ...style.layout.justifyContentEnd,
        margin: 0,

    },
    modalContent: {
        backgroundColor: value.color.white,
        minHeight: '55%',
        ...style.layout.alignItemsCenter

    },
    backButton: {
        ...style.gutter.marginTop.tiny,
        ...style.gutter.marginBottom.small,
        borderColor: value.color.gray,
        borderBottomWidth: value.metricSize.tiny,
        borderRadius: value.metricSize.small,
        width: value.metricSize.extraLarge,
        height: value.metricSize.small

    },
    OTPInput: {
        width: value.metricSize.RowHeight + 3,
        height: value.metricSize.inputHeight,
        borderBottomWidth: 1,
        borderBottomColor: value.color.ActiveColor,
        borderRadius: 0,

        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        backgroundColor: value.color.white,
    },
    OTPTextInput: {
        fontSize: value.fontSize.alternative,
        fontFamily: AppFontFamily.POPPINS_BOLD,
        color: value.color.black,
        ...style.layout.textAlignCenter,
        ...style.gutter.marginTop.tiny,
        width: '100%',
        height: '100%',
    },
    resendContainer: {
        ...style.gutter.marginTop.iconSizeLargr,

    },
    resendText: {
        color: value.color.black,
        textDecorationLine: 'underline',
        fontFamily: AppFontFamily.POPPINS_BOLD
    },
    timerText: {
        color: value.color.gray,
    },
    buttonContainer: {
        ...style.gutter.marginTop.RowHeight,

    },
});

export default VerifyYourOTPModal;
