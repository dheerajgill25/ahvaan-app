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

const ProfileScreen = () => {
    const { value } = useTheme()
    return (
        <ScrollView>
            <View style={styles.container}>
                <AppRow alignItems='center' gap='10'>
                    <TouchableOpacity activeOpacity={1} onPress={() => NavigationManager.navigationRef.goBack()}>
                        <FontAwesome name="angle-left" size={28} color="#134563" style={{ width: 28, height: 28 }} />
                    </TouchableOpacity>
                    <AppText style={{ fontSize: value.fontSize.medium - 1, color: value.color.black, fontFamily: AppFontFamily.POPPINS_MEDIUM }}>
                        My Profile
                    </AppText>
                </AppRow>
                <View style={styles.containers}>
                    <THEME_DEFAULT_IMAGE.MyProfile.UserImage />

                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center', margin: "auto", paddingBottom: 20, }}>
                    <AppRow alignItems='center' gap='10'>
                        <AppText variant='cardTitle'>Alice Dan</AppText>
                        <TouchableOpacity >
                            <THEME_DEFAULT_IMAGE.MyProfile.Edit width={18} height={18}></THEME_DEFAULT_IMAGE.MyProfile.Edit>
                        </TouchableOpacity>
                    </AppRow>
                    <AppText variant='smallText' style={{ textAlign: 'center' }}>+91 999999999</AppText>
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
                    <AppText variant='profiletext'>Enable Touch ID Login</AppText>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15 },

    option: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'red',
    },

    containers: {

        alignItems: 'center',
        padding: 0,


    },
});

export default ProfileScreen;