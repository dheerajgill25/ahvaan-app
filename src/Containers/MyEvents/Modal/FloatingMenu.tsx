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
const { value, style } = useTheme();
const FloatingMenu: React.FC<Props> = ({ visible, onclose, onPress, favoriteButton }) => {

    const { value, style } = useTheme();
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
                        <View style={{ borderBottomColor: value.color.borderColor, borderBottomWidth: value.metricSize.oneSmall }}>
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
                                    style={{ ...style.gutter.marginLeft.small }}
                                />
                                <AppText
                                    variant="smallText"
                                    style={{
                                        color: selectedItem === 'history' ? value.color.secondary : value.color.modaltext,
                                        ...style.gutter.marginLeft.small,
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
                                style={{ ...style.gutter.marginLeft.small, }}
                            />
                            <AppText
                                variant="smallText"
                                style={{
                                    color: selectedItem === 'favorite' ? value.color.secondary : value.color.modaltext,
                                    ...style.gutter.marginLeft.small,
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
        flex: value.metricSize.oneSmall,
    },
    modalOverlay: {
        flex: value.metricSize.oneSmall,
        ...style.layout.justifyContentEnd,
        ...style.layout.alignItemsEnd,
        bottom: value.metricSize.extraLarge + 10,
        left: 0,
        ...style.gutter.padding.medium,
        backgroundColor: value.color.transparent,
    },
    modalContent: {
        width: value.metricSize.extraLarge + 40,
        backgroundColor: value.color.white,
        borderRadius: value.metricSize.tiny,
        ...style.gutter.paddingVertical.small,

        elevation: value.metricSize.oneSmall,
    },
    item: {
        ...style.layout.row,
        ...style.layout.alignItemsCenter,
        ...style.gutter.padding.small,
    },
});

export default FloatingMenu;
