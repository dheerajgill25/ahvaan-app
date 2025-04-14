import React, { useState } from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../../../Components/AppText';
import { useTheme } from '../../../Hooks/useTheme';
import AppRow from '../../../Components/AppRow';
import { THEME_DEFAULT_IMAGE } from '../../../Theme/Default/Image';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';

interface Props {
    visible: boolean;
    onclose: () => void;
    onPress?: () => void;
    favoriteButton?: () => void
}

const FilterHistoryModal: React.FC<Props> = ({ visible, onclose, onPress, favoriteButton }) => {
    const theme = useTheme();
    const { value } = theme;
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleClose = () => {
        onclose();
    };
    const renderSeparator = () => (
        <AppRow alignItems="center" justifyContent="center" style={{ width: '100%', marginTop: -5, marginBottom: 6 }}>
            <Text style={{ borderBottomColor: value.color.Modalborder, borderBottomWidth: 1, width: 110 }}> </Text>
        </AppRow>
    );
    return (
        <View style={styles.container}>
            <Modal
                transparent
                animationType="fade"
                visible={visible}
                onRequestClose={handleClose}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={handleClose}
                    activeOpacity={1}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            // style={styles.item}
                            onPress={() => {
                                setSelectedItem('Newest');
                                onPress && onPress();
                                NavigationManager.navigationRef.navigate(AppRoute.WEDDINGCARD);

                            }}
                        >
                            <AppRow >
                                <Image
                                    source={(THEME_DEFAULT_IMAGE.IconModal.icon1)}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft: 10,
                                        tintColor: selectedItem === 'Newest' ? value.color.secondary : value.color.modaltext
                                    }}
                                />
                                <AppText
                                    variant="smallText"
                                    style={{
                                        color: selectedItem === 'Newest'
                                            ? value.color.secondary
                                            : value.color.modaltext,
                                        marginLeft: 10,
                                    }}
                                >
                                    Newest
                                </AppText>
                            </AppRow>
                        </TouchableOpacity>
                        {renderSeparator()}
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedItem('Oldest');
                                onPress && onPress();
                            }}
                        >
                            <AppRow >

                                <Icons name="history" size={20} color={selectedItem === 'Oldest'
                                    ? value.color.secondary
                                    : value.color.modaltext}
                                    style={{ marginLeft: 10 }} />
                                <AppText
                                    variant="smallText"
                                    style={{
                                        color: selectedItem === 'Oldest'
                                            ? value.color.secondary
                                            : value.color.modaltext,
                                        marginLeft: 10,
                                    }}
                                >
                                    Oldest
                                </AppText>
                            </AppRow>
                            {renderSeparator()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelectedItem('Event')}
                        >
                            <AppRow>
                                <Image
                                    source={(THEME_DEFAULT_IMAGE.IconModal.frame)}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft: 10,
                                        tintColor: selectedItem === 'Event' ? value.color.secondary : value.color.modaltext
                                    }}
                                />
                                {/* <Icon name="heart-outline" size={20} color={selectedItem === 'Event'
                                    ? value.color.secondary
                                    : value.color.modaltext}
                                    style={{ marginLeft: 10 }} onPress={favoriteButton} /> */}
                                <AppText variant='smallText'
                                    style={{
                                        color: selectedItem === 'Event'
                                            ? value.color.secondary
                                            : value.color.modaltext,
                                        marginLeft: 10,
                                    }}
                                >
                                    Event
                                </AppText>
                            </AppRow>
                        </TouchableOpacity>
                        {renderSeparator()}
                        <TouchableOpacity
                            onPress={() => setSelectedItem('Invitation')}
                        >
                            <AppRow>
                                <Image
                                    source={(THEME_DEFAULT_IMAGE.IconModal.layer)}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft: 10,

                                        tintColor: selectedItem === 'Invitation' ? value.color.secondary : value.color.modaltext
                                    }}
                                />
                                {/* <Icon name="heart-outline" size={20} color={selectedItem === 'Invitation'
                                    ? value.color.secondary
                                    : value.color.modaltext}
                                    style={{ marginLeft: 10 }} onPress={favoriteButton} /> */}
                                <AppText variant='smallText'
                                    style={{
                                        color: selectedItem === 'Invitation'
                                            ? value.color.secondary
                                            : value.color.modaltext,
                                        marginLeft: 10,
                                    }}
                                >
                                    Invitation
                                </AppText>
                            </AppRow>
                        </TouchableOpacity>


                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalOverlay: {

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: 40,
        left: 8,
        padding: 20,

    },
    modalContent: {
        width: 115,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 10,
        elevation: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
});

export default FilterHistoryModal;
