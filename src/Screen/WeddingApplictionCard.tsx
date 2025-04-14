import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../Components/AppText';
import { AppFontFamily } from '../Theme/Utils';
import LinearGradient from 'react-native-linear-gradient';
import AppRow from '../Components/AppRow';
import { useTheme } from '../Hooks/useTheme';
import AppButton from '../Components/AppButton';
import { THEME_DEFAULT_IMAGE } from '../Theme/Default/Image';

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

const WeddingApplictionCard = ({ title, dateTime, description, imageUrl, onPress, date, mobileNumber, userName, address }: Props) => {
    const { value } = useTheme()
    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#FFF8F8", padding: 5 }}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ marginTop: 20, }}>
                    <AppRow gap='10px' style={styles.card}>
                        <View style={{ marginTop: 20 }}>
                            <LinearGradient
                                colors={['#C7000D', '#FEF612']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradientBackground}
                            >
                                <Image source={imageUrl ? { uri: imageUrl } : THEME_DEFAULT_IMAGE.Template.template} style={styles.image} />
                            </LinearGradient>
                        </View>


                        <View style={styles.content}>
                            <AppText style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.alternative }}>{dateTime}Wedding Party 👰‍♀️🤵</AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{userName}{mobileNumber}Daniel Scott,+91 9999999999</AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{dateTime}08/03/2025 , 3.30PM </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{address}Vaishali Nagar, Gautam Marg, Jaipur , Rajasthan, 302016, India </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 0 }}>{description} Welcome</AppText>
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
                        <View style={{ marginTop: 0 }}>

                            <Image source={imageUrl ? { uri: imageUrl } : THEME_DEFAULT_IMAGE.Template.template2} style={styles.images} />

                        </View>


                        <View style={styles.content}>
                            <AppText style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.alternative }}>{dateTime}Wedding Party <Text style={{ width: 15 }}>👰‍♀️🤵</Text> </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{userName}{mobileNumber}Daniel Scott,+91 9999999999</AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{dateTime}08/03/2025 , 3.30PM </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{address}Vaishali Nagar, Gautam Marg, Jaipur , Rajasthan, 302016, India </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 10 }}>{description} Welcome</AppText>
                            <AppButton title={'Re-Create'} borderRadius={50} variant='secondary' textColor='white' width={"50%"} />
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
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        width: "94%"
    },
    image: {
        width: 36,
        height: 69,
        borderRadius: 5,
        // marginRight: 10,
        justifyContent: 'center',
        alignContent: 'center',
        zIndex: 1
    },
    images: {
        width: 68,
        height: 130,
        borderRadius: 5,
        // marginRight: 10,
        justifyContent: 'center',
        alignContent: 'center',
        zIndex: 1
    },
    content: {
        flex: 1,
    },

    gradientBackground: {
        width: 65,
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
});

export default WeddingApplictionCard;
