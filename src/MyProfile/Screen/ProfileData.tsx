import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppText from '../../Components/AppText';
import { THEME_DEFAULT_IMAGE } from '../../Theme/Default/Image';
import AppRow from '../../Components/AppRow';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../Hooks/useTheme';
import { AppFontFamily } from '../../Theme/Utils';
import NavigationManager from '../../Navigator/Component/NavigationManager';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '../../Components/CheckBox';


const ProfileScreen = () => {
    const { value } = useTheme()
    return (
        <ScrollView>
            <View style={styles.container}>
                <AppRow alignItems='center' gap='20' style={{ paddingBottom: 25 }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationManager.navigationRef.goBack()}>
                        <FontAwesome name="angle-left" size={28} color="#134563" />
                    </TouchableOpacity>
                    <AppText style={{ fontSize: 20, color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM, }}>
                        My Profile
                    </AppText>
                </AppRow>
                <View style={styles.containers}>
                    <Image
                        source={{ uri: "https://s3-alpha-sig.figma.com/img/b60d/4de8/d5188cec925a9f154dcee647500bae18?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ahLGH5Msa3mdRHFY8cKLynJ3op4C0b4uCGH7ijWwHHd2A4ycnvqBEAkn~FSOXyorr4k2Rp9Ie8dczAYzQ8VefJRZibrjWGbSlx8MCiLfrYiMjfcysDMzHFQ3xdfiGFRF7xH~hexhGd7~Th7t~xAMU-HId3~NwDcbfQpZHkNCdbVeOWnW6PrZgm9FGUGJjee-OElAL-8Lh5PRGKuKrW2046qCuyMFsAtfR0v8TNbyrUWtYid5xeKNbC66cVQx9O0ogUe1J3Obo3HnHBAZsi4kGMXlKmRZmeF8u~BRn2lfGSyW-t-CH88NyWGIGv0t~vYbjE~CSRDVYya4obrjoJcSyw__" }}
                        resizeMode='cover'

                        style={styles.profileImage}
                    />
                    <TouchableOpacity activeOpacity={0.8}>
                        <THEME_DEFAULT_IMAGE.MyProfile.camera width={25} height={25} style={styles.CameraIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center', margin: "auto", paddingBottom: 20, }}>
                    <AppRow alignItems='center' gap='10'>
                        <AppText variant='cardTitle'>Alice Dan</AppText>
                        <TouchableOpacity >
                            <THEME_DEFAULT_IMAGE.MyProfile.Edit width={18} height={18}></THEME_DEFAULT_IMAGE.MyProfile.Edit>
                        </TouchableOpacity>
                    </AppRow>
                    <AppText variant='smallText' style={{ textAlign: 'center' }}>+91 9999999999</AppText>
                    <AppText variant='smallText' style={{ textAlign: 'center' }}>****</AppText>
                </View>


                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Vector2 width={18} height={18} />
                            <AppText variant='profiletext'>Favourite</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Vector3 width={18} height={18} />
                            <AppText variant='profiletext'>Downloads</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Vector4 width={18} height={18} />
                            <AppText variant='profiletext'>Language</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Loction width={18} height={18} />
                            <AppText variant='profiletext'>Location</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Subscription width={18} height={18} />
                            <AppText variant='profiletext'>Subscription</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>

                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Vector7 width={20} height={20} />
                            <AppText variant='profiletext'>Security Questions</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>

                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Hide width={20} height={20} />
                            <AppText variant='profiletext'>Delete Account</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <AppRow alignItems='center' justifyContent='space-between'>
                        <AppRow alignItems='center' gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.Update width={20} height={20} />
                            <AppText variant='profiletext'>Update Profile</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>

                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <AppRow alignItems='center' justifyContent='space-between' gap='10'>
                        <AppRow gap='10'>
                            <THEME_DEFAULT_IMAGE.MyProfile.LogOut width={20} height={20} />

                            <AppText variant='profiletext'>Log Out</AppText>
                        </AppRow>
                        <FontAwesome name="angle-right" size={20} color="#134563" />
                    </AppRow>

                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <AppRow alignItems='center' gap='10'>
                        <CheckBox label={''} isChecked={true} onToggle={() => []}
                        />
                        <AppText variant='profiletext'>Enable Touch ID Login</AppText>
                    </AppRow>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15 },

    option: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    profileImage: {
        width: 95,
        height: 95,
        borderRadius: 50,
        position: 'absolute'

    },

    containers: {
        margin: "auto",
        alignItems: 'center',
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.24,
        shadowRadius: 13.7,
        elevation: 6,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#EF293D',

    },
    CameraIcon: {
        position: 'absolute',
        top: 15,
        left: 25
    }
});

export default ProfileScreen;