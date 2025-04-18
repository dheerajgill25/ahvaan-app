import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import AppText from './AppText';
import AppButton from './AppButton';
import AppRow from './AppRow';
import { useTheme } from '../Hooks/useTheme';
const { value, style } = useTheme();
interface ImagePickerModalProps {
    isVisible: boolean;
    onClose: () => void;
    onImageSelect: (uri: string) => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({ isVisible, onClose, onImageSelect }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleImageSelection = (response: ImagePickerResponse) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('Image Picker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            if (uri) {
                onImageSelect(uri);
                onClose();
            } else {
                console.log('Image URI is undefined');
            }
        }
    };

    const openCamera = () => {
        const options = {
            mediaType: 'photo' as const,
            cameraType: 'back' as const,
            saveToPhotos: true,
        };

        setIsLoading(true);
        launchCamera(options, handleImageSelection);
        setIsLoading(false);
    };

    const openGallery = () => {
        const options = {
            mediaType: 'photo' as const,
        };

        setIsLoading(true);
        launchImageLibrary(options, handleImageSelection);
        setIsLoading(false);
    };

    return (
        <Modal isVisible={isVisible}  >
            <View style={styles.modalContainer}>
                <AppText variant='heading' style={styles.modalTitle}>Select Image</AppText>

                <AppRow gap='10'>
                    <AppButton title={'Open Camera'} variant='secondary' onPress={openCamera} width={"45%"} textColor={value.color.white} />
                    <AppButton title={'Open Gallery'} variant='secondary' onPress={openGallery} width={"45%"} textColor={value.color.white} />
                </AppRow>
                <View style={{ ...style.gutter.paddingVertical.small, width: "100%", ...style.layout.alignItemsCenter }}>
                    <AppButton title={'Cancel'} variant='secondary' onPress={onClose} width={"94%"} textColor={value.color.white} />
                </View>



            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: value.color.white,
        ...style.gutter.padding.medium,
        borderRadius: value.metricSize.small,
        ...style.layout.alignItemsCenter
    },
    modalTitle: {
        color: value.color.bColor,
        ...style.gutter.marginBottom.medium,
    },
});

export default ImagePickerModal;
