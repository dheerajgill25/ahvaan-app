import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AppText from '../Components/AppText';
import { AppFontFamily } from '../Theme/Utils';
import LinearGradient from 'react-native-linear-gradient';
import AppRow from '../Components/AppRow';
import { useTheme } from '../Hooks/useTheme';
const { value, style } = useTheme()
type Props = {
    title: string;
    dateTime: string;
    description: string;
    imageUrl?: string;
    source?: string
    onPress?: () => void
    date?: string
};
const { width, height } = Dimensions.get('window');
const ApplicationCard = ({ title, dateTime, description, imageUrl, onPress, date }: Props) => {
    const { value } = useTheme()

    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <AppRow gap='10px' style={styles.card}>
                    <LinearGradient
                        colors={[value.color.LinearGradient, value.color.Gradient]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.gradientBackground}
                    >
                        <Image source={imageUrl ? { uri: imageUrl } : require('./../Assets/Fonts/Images/template.png')} style={styles.image} />
                    </LinearGradient>

                    <View style={styles.content}>
                        <AppText variant='smallText' style={styles.date}>{dateTime}</AppText>
                        <AppText variant='smallText' style={{ fontFamily: AppFontFamily.POPPINS_MEDIUM, color: value.color.black }}>{title}</AppText>
                        <AppText variant='subheading' style={styles.description}>{description}</AppText>
                    </View>
                    <View>
                        <AppText variant='subheading' style={{
                            fontFamily: AppFontFamily.POPPINS_MEDIUM, fontSize: value.fontSize.mini,
                            color: value.color.secondary
                        }}> {date} </AppText>
                    </View>
                </AppRow>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({

    card: {
        backgroundColor: value.color.white,
        borderRadius: value.metricSize.small,
        ...style.gutter.padding.small,
        ...style.layout.alignItemsStart,
        shadowColor: value.color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: value.metricSize.tinySmall,
        elevation: 1,
        width: "100%"
    },
    gradientBackground: {
        width: width * 0.18,
        height: height * 0.13,
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        borderRadius: value.metricSize.tiny,
    },
    image: {
        width: width * 0.10,
        height: height * 0.10,
        borderRadius: value.metricSize.tiny,
        ...style.layout.alignItemsCenter,
        ...style.layout.justifyContentCenter,
        zIndex: 1,
    },
    content: {
        flex: 1,
    },
    date: {
        fontSize: value.fontSize.footSmall,
        color: value.color.black,

        ...style.gutter.marginBottom.tinySmall,
    },

    description: {
        color: value.color.modaltext,
    },

});

export default ApplicationCard;
