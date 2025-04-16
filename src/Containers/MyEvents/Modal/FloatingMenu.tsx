import React, { useState } from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../../../Components/AppText';
import { useTheme } from '../../../Hooks/useTheme';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import NavigationManager from '../../../Navigator/Component/NavigationManager';

interface Props {
    visible: boolean;
    onclose: () => void;
    onPress?: () => void;
    favoriteButton?: () => void;
}

const FloatingMenu: React.FC<Props> = ({ visible, onclose, onPress, favoriteButton }) => {
    const theme = useTheme();
    const { value } = theme;
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleClose = () => {
        setSelectedItem(null);
        onclose();
    };

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
                        <View style={{ borderBottomColor: value.color.borderColor, borderBottomWidth: 1 }}>
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => {
                                    setSelectedItem('history');
                                    onPress && onPress();
                                }}
                            >
                                <Icon
                                    name="history"
                                    size={20}
                                    color={selectedItem === 'history' ? value.color.secondary : value.color.modaltext}
                                    style={{ marginLeft: 10 }}
                                />
                                <AppText
                                    variant="smallText"
                                    style={{
                                        color: selectedItem === 'history' ? value.color.secondary : value.color.modaltext,
                                        marginLeft: 10,
                                    }}
                                >
                                    History
                                </AppText>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => {
                                setSelectedItem('favorite');
                                NavigationManager.navigationRef.navigate(AppRoute.FAVORITESCREEB);
                            }}
                        >
                            <Icon
                                name="heart-outline"
                                size={20}
                                color={selectedItem === 'favorite' ? value.color.secondary : value.color.modaltext}
                                style={{ marginLeft: 10 }}
                            />
                            <AppText
                                variant="smallText"
                                style={{
                                    color: selectedItem === 'favorite' ? value.color.secondary : value.color.modaltext,
                                    marginLeft: 10,
                                }}
                            >
                                Favorite
                            </AppText>
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
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: -110,
        left: 0,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    modalContent: {
        width: 140,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 10,
        elevation: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});

export default FloatingMenu;
