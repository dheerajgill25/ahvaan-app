import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import { useTheme } from '../../../Hooks/useTheme';
import AppText from '../../../Components/AppText';
import { AppFontFamily } from '../../../Theme/Utils';
import AppButton from '../../../Components/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ApplicationCard from '../../../Screen/ApplictionCartScreen';

const InvitationsContainer = () => {
    const theme = useTheme();
    const { value, style } = theme
    return (
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>


            <View style={styles.ImgConatiner}>
                <Image
                    style={{ width: "80%", height: "80%", resizeMode: 'contain', top: -50 }}
                    source={THEME_DEFAULT_IMAGE.GurupImage.groupData}
                />
                <View>

                </View>
            </View>
            <View style={{ top: -170, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                <AppText variant='HeaderText' style={{ color: value.color.black, fontFamily: AppFontFamily.POPPINS_REGULAR, textAlign: 'center', marginBottom: 10 }}>
                    You’ve no Events yet!
                </AppText>
                <AppText variant='smallText' style={{ textAlign: 'center', marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</AppText>
                <AppButton borderRadius={50} variant='secondary' textColor={value.color.white} title='Create Events Now' />


            </View>
            <View style={{ position: 'absolute', bottom: 75, right: 30 }}>
                <Icon name="microsoft-xbox-controller-menu" size={35} color={value.color.secondary} />
            </View>
        </ScrollView>
    );
};

export default InvitationsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F8',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImgConatiner: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 