import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppRow from './AppRow';
import AppText from './AppText';
import { AppFontFamily } from '../Theme/Utils';
import { useTheme } from '../Hooks/useTheme';

type Props = {
    showPicker: boolean;
    setShowPicker: (val: boolean) => void;
    selectedCountry: {
        name: string;
        dial_code: string;
        code: string;
        flag: string;
    };
    setSelectedCountry: (val: {
        name: string;
        dial_code: string;
        code: string;
        flag: string;
    }) => void;
};

const CountrySelector: React.FC<Props> = ({
    showPicker,
    setShowPicker,
    selectedCountry,
    setSelectedCountry,
}) => {
    const { value } = useTheme()
    return (
        <>
            <TouchableOpacity
                onPress={() => setShowPicker(true)}
                style={styles.countryPickerButton}
            >
                <AppRow gap="8" alignItems="center">
                    <AppText variant="subheading" style={styles.countryText}>
                        {selectedCountry.flag}
                    </AppText>
                    <AppText variant="subheading" style={{ color: "black", fontFamily: AppFontFamily.POPPINS_BOLD }}>
                        {selectedCountry.dial_code}
                    </AppText>
                    <FontAwesome name="angle-down" size={18} color="black" style={{ fontFamily: AppFontFamily.POPPINS_BOLD }} />
                    <View style={styles.separator} />
                </AppRow>
            </TouchableOpacity>

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
                    modal: { height: 400 },
                    textInput: { color: 'black', },
                    countryName: { color: 'black', fontFamily: AppFontFamily.POPPINS_SEMI_BOLD, fontSize: value.fontSize.footprint },
                    dialCode: { color: 'black', fontFamily: AppFontFamily.POPPINS_SEMI_BOLD, fontSize: value.fontSize.footprint },


                }}
                lang="en"
            />
        </>
    );
};

const styles = StyleSheet.create({
    countryPickerButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 7,
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: ' "rgba(217, 217, 217, 0.62)"',
        borderWidth: 1,
        marginRight: -1,
    },
    countryText: {
        color: 'black',
        fontWeight: 700
    },
    dialCode: {
        fontWeight: 800,

    },
    separator: {
        borderLeftColor: '#D9D9D9',
        borderLeftWidth: 1,
        height: 30,

    },
});

export default CountrySelector;
