import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../../../Components/AppText';
import AppRow from '../../../Components/AppRow';
import { useTheme } from '../../../Hooks/useTheme';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';

const WeddingCard = () => {
    const { value } = useTheme()
    return (
        <View style={{ backgroundColor: "#FFF8F8", flex: 1 }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => NavigationManager.navigationRef.navigate(AppRoute.WEDDINGAPPLICTIONCARD)}>
                <View style={styles.card} >
                    <AppRow gap='10' alignItems='center'>
                        <AppText variant='cardTitle' >Wedding Party</AppText>
                        <THEME_DEFAULT_IMAGE.IconModal.Frame width={32}></THEME_DEFAULT_IMAGE.IconModal.Frame>
                    </AppRow>

                    <AppRow gap='10px' style={{ marginVertical: 5 }}>
                        <View style={{ width: 100 }}>
                            <AppText variant='smallText' style={{ color: value.color.black, }}>Host</AppText>
                        </View>
                        <AppText variant='smallText' style={{ color: value.color.black }}>+91 9999999999</AppText>
                    </AppRow>

                    <View style={styles.divider} />

                    <AppRow style={{ marginVertical: 5 }}>
                        <View style={{ width: 115 }}>
                            <AppText variant='smallText' style={{ color: value.color.black }}>Date & Time</AppText>

                        </View>
                        <AppText variant='smallText' style={{ color: value.color.black }}>08/03/2025 , 3.30PM</AppText>
                    </AppRow>

                    <View style={styles.divider} />

                    <AppRow style={{ marginVertical: 5 }} >
                        <View style={{ width: 115 }}>
                            <AppText variant='smallText' style={{ color: value.color.black }}>Location</AppText>
                        </View>

                        <AppText variant='smallText' style={{ color: value.color.black, width: "70%" }}>
                            Vaishali Nagar, Gautam Marg, Jaipur, Rajasthan, 302016, India
                        </AppText>
                    </AppRow>

                    <View style={styles.divider} />

                    <AppRow style={{ marginVertical: 5 }}>
                        <View style={{ width: 115 }}>
                            <AppText variant='smallText' style={{ color: value.color.black }}>Message</AppText>

                        </View>
                        <AppText variant='smallText' style={{ color: value.color.black }}>Welcome</AppText>
                    </AppRow>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        elevation: 3,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop: 40
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    divider: {
        height: 1,
        backgroundColor: '#DCDCDC',
        marginVertical: 8,
    },
});

export default WeddingCard;
