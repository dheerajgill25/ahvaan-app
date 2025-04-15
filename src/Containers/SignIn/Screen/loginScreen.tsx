import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import AppText from '../../../Components/AppText';
import AppButton from '../../../Components/AppButton';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { useTheme } from '../../../Hooks/useTheme';
import { AppRoute } from '../../../Navigator/Component/AppRoute';


const loginScreen = () => {
    const theme = useTheme();
    const { value, style } = theme;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                {/* <Image
                    source={THEME_DEFAULT_IMAGE.GurupImage.groupImage1}
                
                /> */}
                <THEME_DEFAULT_IMAGE.BackGroundImageScreen.GroupCard ></THEME_DEFAULT_IMAGE.BackGroundImageScreen.GroupCard>
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', '#C50104', '#A70003']}
                    locations={[0.100, 0.300, 0.38271, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.overlayGradient}
                >
                    <View style={{ paddingHorizontal: 10, marginTop: 50 }}>
                        <AppText variant='heading' style={{ textAlign: 'center', marginBottom: 8 }}>Effortlessly Plan And Manage Your Invites</AppText>
                        <AppText variant='subheading' style={{ textAlign: 'center', marginHorizontal: 30, marginBottom: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </AppText>
                        <View style={styles.center}>

                            <AppButton
                                title={"Let’s Get In"}
                                variant='primary'
                                width="50%"
                                borderRadius={50}
                                onPress={() => NavigationManager.navigationRef.navigate(AppRoute.TABSCREEN)} />
                        </View>
                        <View style={styles.centers}>
                            <AppButton
                                title={"Sign Up"}
                                variant='outline'
                                width="50%"
                                borderRadius={50}

                                onPress={() => NavigationManager.navigationRef.navigate(AppRoute.LOGINVERIFY)}
                            />
                        </View>

                    </View>

                </LinearGradient>
            </View>
        </ScrollView>
    );
};

export default loginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridImage: {
        width: 415,
        height: 450,
        borderRadius: 10,
        zIndex: -1,
        overflow: 'hidden',
    },
    center: {
        justifyContent: 'center',
        gap: "20px",
        alignItems: 'center'
    },
    centers: {
        justifyContent: 'center',
        gap: "20px",
        alignItems: 'center',
        marginTop: 20
    }





});