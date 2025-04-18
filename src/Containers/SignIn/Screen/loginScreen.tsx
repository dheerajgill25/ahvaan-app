import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { useTheme } from '../../../Hooks/useTheme';
import { AppRoute } from '../../../Navigator/Component/AppRoute';


const { value, style } = useTheme();
const LoginScreen = () => {
    const { value, style } = useTheme();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <THEME_DEFAULT_IMAGE.BackGroundImageScreen.GroupCard />
                <LinearGradient
                    colors={[value.color.line, value.color.ActiveColor, value.color.ActiveColor]}
                    locations={[0.100, 0.300, 0.38271, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.overlayGradient}
                >
                    <View style={{ ...style.gutter.paddingHorizontal.small, ...style.gutter.marginTop.inputHeight }}>
                        <AppText variant='heading' style={{ ...style.layout.textAlignCenter, ...style.gutter.marginBottom.mini }}>Effortlessly Plan And Manage Your Invites</AppText>
                        <AppText variant='subheading' style={{ ...style.layout.textAlignCenter, ...style.gutter.marginHorizontal.iconSizeLargr, ...style.gutter.marginBottom.small }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </AppText>
                        <View style={styles.center}>

                            <AppButton
                                title={"Let’s Get In"}
                                variant='primary'
                                width="50%"
                                borderRadius={value.metricSize.extraLarge}
                                onPress={() => NavigationManager.navigationRef.navigate(AppRoute.TABSCREEN)} />
                        </View>
                        <View style={styles.centers}>
                            <AppButton
                                title={"Sign Up"}
                                variant='outline'
                                width="50%"
                                borderRadius={value.metricSize.extraLarge}

                                onPress={() => NavigationManager.navigationRef.navigate(AppRoute.LOGINVERIFY)}
                            />
                        </View>

                    </View>

                </LinearGradient>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: value.metricSize.oneSmall,
        backgroundColor: value.color.white,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 450,
    },
    overlayGradient: {
        position: 'absolute',
        top: 200,
        width: '100%',
        height: '150%',
        ...style.layout.justifyContentCenter,
        ...style.layout.alignItemsCenter,
    },
    gridImage: {
        borderRadius: value.metricSize.small,
        zIndex: value.metricSize.oneSmall,
        overflow: 'hidden',
    },
    center: {
        ...style.layout.justifyContentCenter,
        ...style.gutter.gap.medium,
        ...style.layout.alignItemsCenter,
    },
    centers: {
        ...style.layout.justifyContentCenter,
        ...style.gutter.gap.medium,
        ...style.layout.alignItemsCenter,
        ...style.gutter.marginTop.medium,
    }





});