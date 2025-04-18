import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../Components/AppText';
import { AppFontFamily } from '../Theme/Utils';
import LinearGradient from 'react-native-linear-gradient';
import AppRow from '../Components/AppRow';
import { useTheme } from '../Hooks/useTheme';
import AppButton from '../Components/AppButton';
import { THEME_DEFAULT_IMAGE } from '../Theme/Default/Image';
import NavigationManager from '../Navigator/Component/NavigationManager';
import { AppRoute } from '../Navigator/Component/AppRoute';

type Props = {
    title: string;
    dateTime: string;
    mobileNumber: string;
    userName: string;
    address: string;
    description: string;
    imageUrl?: string;
    source?: string
    onPress?: () => void
    date?: string
};
const { value, style } = useTheme()
const WeddingApplictionCard = ({ title, dateTime, description, imageUrl, onPress, date, mobileNumber, userName, address }: Props) => {
    const { value, style } = useTheme()
    return (
        <>
            <View style={{ flex: 1, backgroundColor: value.color.GradientBackground, ...style.gutter.padding.tiny }}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ ...style.gutter.marginTop.medium }}>
                    <AppRow gap='10px' style={styles.card}>
                        <View style={{ ...style.gutter.marginTop.medium }}>
                            <LinearGradient
                                colors={[value.color.LinearGradient, value.color.Gradient]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradientBackground}
                            >
                                <Image source={imageUrl ? { uri: imageUrl } : THEME_DEFAULT_IMAGE.Template.template} style={styles.image} />
                            </LinearGradient>
                        </View>


                        <View style={styles.content}>
                            <AppRow alignItems='center' gap='10'>
                                <AppText style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.alternative }}>{dateTime}Wedding Party</AppText>
                                <THEME_DEFAULT_IMAGE.IconModal.Frame width={15} height={15}></THEME_DEFAULT_IMAGE.IconModal.Frame>
                            </AppRow>

                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.tiny }}>{userName}{mobileNumber}Daniel Scott,+91 9999999999</AppText>
                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.tiny }}>{dateTime}08/03/2025 , 3.30PM </AppText>
                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.tiny }}>{address}Vaishali Nagar, Gautam Marg, Jaipur , Rajasthan, 302016, India </AppText>
                            <AppText variant='subheading' style={{ color: value.color.black, }}>{description} Welcome</AppText>
                            {/* <AppButton title={'Re-Create'} borderRadius={50} variant='secondary' textColor='white' width={"45%"} /> */}
                        </View>
                        <View>
                            <AppText variant='subheading' style={{
                                fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.mini,
                                color: value.color.secondary
                            }}> {date} </AppText>
                        </View>

                    </AppRow>
                    <View>


                    </View>


                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={onPress} >



                    <AppRow gap='10px' style={styles.card}>
                        <View>

                            <Image source={imageUrl ? { uri: imageUrl } : THEME_DEFAULT_IMAGE.Template.template2} style={styles.images} />

                        </View>


                        <View style={styles.content}>
                            <AppRow alignItems='center' gap='10'>
                                <AppText style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.alternative }}>{dateTime}Wedding Party</AppText>
                                <THEME_DEFAULT_IMAGE.IconModal.Frame width={15} height={15}></THEME_DEFAULT_IMAGE.IconModal.Frame>
                            </AppRow>
                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.tiny }}>{userName}{mobileNumber}Daniel Scott,+91 9999999999</AppText>
                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.tiny }}>{dateTime}08/03/2025 , 3.30PM </AppText>
                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.tiny }}>{address}Vaishali Nagar, Gautam Marg, Jaipur , Rajasthan, 302016, India </AppText>
                            <AppText variant='subheading' style={{ color: value.color.black, ...style.gutter.marginBottom.small }}>{description} Welcome</AppText>
                            <AppButton title={'Re-Create'} borderRadius={50} variant='secondary' textColor='white' width={"50%"} onPress={() => NavigationManager.navigationRef.navigate(AppRoute.GuestListConatiner)} />
                        </View>
                        <View>
                            <AppText variant='subheading' style={{
                                fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.mini,
                                color: value.color.secondary
                            }}> {date} </AppText>
                        </View>

                    </AppRow>
                    <View>


                    </View>


                </TouchableOpacity>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    card: {
        ...style.layout.row,

        backgroundColor: value.color.white,
        borderRadius: value.metricSize.small,
        ...style.gutter.padding.small,
        ...style.gutter.margin.small,
        ...style.layout.alignItemsStart,
        shadowColor: value.color.white,
        shadowOffset: { width: 0, height: value.metricSize.oneSmall },
        shadowOpacity: 0.1,
        shadowRadius: value.metricSize.tinySmall,
        elevation: value.metricSize.oneSmall,
        width: "94%"
    },
    image: {
        width: value.metricSize.largeEx + 1,
        height: value.metricSize.choiceHeight - 1,
        borderRadius: value.metricSize.tiny,
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        // marginRight: 10,

        zIndex: value.metricSize.oneSmall
    },
    images: {
        width: value.metricSize.choiceHeight - 2,
        height: value.metricSize.extraLarge + 30,
        borderRadius: 5,
        // marginRight: 10,
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        zIndex: value.metricSize.oneSmall
    },
    content: {
        flex: value.metricSize.oneSmall,
    },

    gradientBackground: {
        width: value.metricSize.choiceHeight - 5,
        height: value.metricSize.extraLarge - 9,
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        borderRadius: value.metricSize.tiny
    },
});

export default WeddingApplictionCard;
