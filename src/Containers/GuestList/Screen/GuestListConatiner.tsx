import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../Hooks/useTheme';
import AppRow from '../../../Components/AppRow';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import { AppFontFamily } from '../../../Theme/Utils';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';


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

const GuestListConatiner = ({ title, dateTime, description, imageUrl, onPress, date, mobileNumber, userName, address }: Props) => {
    const { value } = useTheme()
    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#FFF8F8", padding: 15 }}>
                {/* <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ marginTop: 20, }}>
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
                            <AppRow alignItems='center' gap='10'>
                                <AppText style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.alternative }}>{dateTime}Wedding Party</AppText>
                                <THEME_DEFAULT_IMAGE.IconModal.Frame width={15} height={15}></THEME_DEFAULT_IMAGE.IconModal.Frame>
                            </AppRow>

                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{userName}{mobileNumber}Daniel Scott,+91 9999999999</AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{dateTime}08/03/2025 , 3.30PM </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{address}Vaishali Nagar, Gautam Marg, Jaipur , Rajasthan, 302016, India </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 0 }}>{description} Welcome</AppText>
                          
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


                </TouchableOpacity> */}
                <TouchableOpacity activeOpacity={0.8} onPress={onPress}  >



                    <AppRow gap='15px' style={styles.card}>
                        <View style={{ marginTop: 0 }}>

                            <Image source={imageUrl ? { uri: imageUrl } : THEME_DEFAULT_IMAGE.Template.template2} style={styles.images} />

                        </View>


                        <View style={styles.content}>
                            <AppRow alignItems='center' gap='10'>
                                <AppText style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.alternative }}>{dateTime}Wedding Party</AppText>
                                <THEME_DEFAULT_IMAGE.IconModal.Frame width={15} height={15}></THEME_DEFAULT_IMAGE.IconModal.Frame>
                            </AppRow>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{userName}{mobileNumber}Daniel Scott,+91 9999999999</AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5 }}>{dateTime}08/03/2025 , 3.30PM </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 5, width: "100%" }}>{address}Vaishali Nagar, Gautam Marg, Jaipur , Rajasthan, 302016, India </AppText>
                            <AppText variant='subheading' style={{ color: '#000', marginBottom: 10 }}>{description} Welcome</AppText>
                            <AppButton title={'Add More Guest'} borderRadius={50} variant='secondary' textColor='white' width={"60%"} />
                        </View>
                        <View>
                            <AppText variant='subheading' style={{
                                fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.mini,
                                color: value.color.secondary
                            }}> {date} </AppText>
                        </View>
                        <View style={{ marginLeft: -130 }}>
                            <AppRow gap='10'>
                                <TouchableOpacity>
                                    <THEME_DEFAULT_IMAGE.ContainerCart.Capa_1 />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <THEME_DEFAULT_IMAGE.ContainerCart.Delete />
                                </TouchableOpacity>
                            </AppRow>
                        </View>
                    </AppRow>
                    <View>
                    </View>
                </TouchableOpacity>


                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                    <AppText variant='heading' style={{ color: value.color.black, borderBottomColor: value.color.secondary, borderBottomWidth: 1, width: 200, textAlign: 'center' }}>Guest List</AppText>

                </View>
                <View style={{ padding: 10, }}>
                    <AppRow gap='10' alignItems='center' justifyContent='space-between'>
                        <AppText variant='smallText'>
                            Total Guest
                        </AppText>
                        <AppRow gap='10'>
                            <AppText variant='smallText' >
                                Adults(0)
                            </AppText>
                            <AppText variant='smallText' >
                                Kids(0)
                            </AppText>
                        </AppRow>

                    </AppRow>
                    <View style={styles.cards}>
                        <AppText variant='smallText' style={{ color: value.color.black }} >
                            Bakeley Scott
                        </AppText>
                    </View>

                </View>
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
        marginTop: 20,
        alignItems: 'flex-start',
        shadowColor: "0px 4px 19.5px 6px #0000001A",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        // borderWidth: 1,
        // borderColor: '#f3f3f3',
        width: "100%"
    },
    cards: {

        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        shadowRadius: 4,
        width: "100%"
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
        width: "90%"

    },

    gradientBackground: {
        width: 65,
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
});

export default GuestListConatiner;
