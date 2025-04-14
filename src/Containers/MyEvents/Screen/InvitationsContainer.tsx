import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
// import GroupDataSvg from '../../../Assets/Svgs/GroupData.svg';

import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import { useTheme } from '../../../Hooks/useTheme';
import AppText from '../../../Components/AppText';
import { AppFontFamily } from '../../../Theme/Utils';
import AppButton from '../../../Components/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ApplicationCard from '../../../Screen/ApplictionCartScreen';
import FloatingMenu from '../Modal/FloatingMenu';

const InvitationsContainer = () => {
    const theme = useTheme();
    const { value, style } = theme
    const [visible, setVisible] = useState(false);
    return (
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>


            <View style={styles.ImgConatiner}>

                <THEME_DEFAULT_IMAGE.Template.GroupData style={{ width: "80%", height: "80%", top: -50 }}></THEME_DEFAULT_IMAGE.Template.GroupData>

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
            <View style={{ position: 'absolute', bottom: 75, right: 15 }}>
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Icon name="microsoft-xbox-controller-menu" size={35} color={value.color.secondary} />
                </TouchableOpacity>
            </View>
            {visible && (
                <FloatingMenu visible={visible} onclose={() => setVisible(false)} />
            )}
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