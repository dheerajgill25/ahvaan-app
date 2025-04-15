import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../Components/AppText';
import { AppFontFamily } from '../Theme/Utils';
import LinearGradient from 'react-native-linear-gradient';
import AppRow from '../Components/AppRow';
import { useTheme } from '../Hooks/useTheme';

type Props = {
    title: string;
    dateTime: string;
    description: string;
    imageUrl?: string;
    source?: string
    onPress?: () => void
    date?: string
};

const ApplicationCard = ({ title, dateTime, description, imageUrl, onPress, date }: Props) => {
    const { value } = useTheme()
    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <AppRow gap='10px' style={styles.card}>
                    <LinearGradient
                        colors={['#C7000D', '#FEF612']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.gradientBackground}
                    >
                        <Image source={imageUrl ? { uri: imageUrl } : require('./../Assets/Fonts/Images/template.png')} style={styles.image} />
                    </LinearGradient>

                    <View style={styles.content}>
                        <AppText variant='smallText' style={styles.date}>{dateTime}</AppText>
                        <AppText variant='smallText' style={{ fontFamily: AppFontFamily.POPPINS_MEDIUM, color: '#000' }}>{title}</AppText>
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
        elevation: 1,

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
    content: {
        flex: 1,
    },
    date: {
        fontSize: 10,
        color: '#000',
        marginBottom: 4,
    },

    description: {
        color: '#7D7D7D',
    },
    gradientBackground: {
        width: 65,
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
});

export default ApplicationCard;
