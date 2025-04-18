import React, { useState } from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import AppText from '../../../Components/AppText';
import { useTheme } from '../../../Hooks/useTheme';
import AppRow from '../../../Components/AppRow';
import NavigationManager from '../../../Navigator/Component/NavigationManager';
import { AppRoute } from '../../../Navigator/Component/AppRoute';
import NewStar from '../../../Assets/Icon/NewStar';
import WatchTime from '../../../Assets/Icon/WatchTime';
import EventIcon from '../../../Assets/Icon/EventIcon';
import InvitationIcon from '../../../Assets/Icon/InvitationIocn';

interface Props {
    visible: boolean;
    onclose: () => void;
    onPress?: () => void;
    favoriteButton?: () => void;
}
const { value, style } = useTheme();
const FilterHistoryModal: React.FC<Props> = ({ visible, onclose, onPress }) => {

    const { value, style } = useTheme();

    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const renderSeparator = () => (
        <AppRow
            alignItems="center"
            justifyContent="center"
            style={{ width: '100%', marginTop: -5, marginBottom: 6 }}
        >
            <Text
                style={{
                    borderBottomColor: value.color.Modalborder,
                    borderBottomWidth: value.metricSize.oneSmall,
                    width: value.metricSize.extraLarge + 10,
                }}
            />
        </AppRow>
    );

    const handleSelect = (label: string, navigateTo?: AppRoute) => {
        setSelectedItem(label);
        onPress && onPress();

        if (navigateTo) {
            NavigationManager.navigationRef.navigate(navigateTo);
        }
    };

    const renderOption = (
        label: string,
        IconComponent: React.ReactElement,
        navigateTo?: AppRoute
    ) => {
        const isSelected = selectedItem === label;
        const iconColor = isSelected ? value.color.secondary : value.color.modaltext;

        return (
            <TouchableOpacity onPress={() => handleSelect(label, navigateTo)} activeOpacity={0.7}>
                <AppRow>
                    <View style={{ ...style.gutter.marginLeft.small }}>
                        {React.cloneElement(IconComponent, { color: iconColor })}
                    </View>
                    <AppText
                        variant="smallText"
                        style={{
                            color: iconColor,
                            ...style.gutter.marginLeft.small
                        }}
                    >
                        {label}
                    </AppText>
                </AppRow>
            </TouchableOpacity>
        );
    };

    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onclose}
        >
            <TouchableOpacity
                style={styles.modalOverlay}
                onPress={onclose}
                activeOpacity={1}
            >
                <View style={styles.modalContent}>
                    {renderOption('Newest', <NewStar />, AppRoute.WEDDINGCARD)}
                    {renderSeparator()}
                    {renderOption('Oldest', <WatchTime />, AppRoute.MYPROFILE)}
                    {renderSeparator()}
                    {renderOption('Event', <EventIcon />)}
                    {renderSeparator()}
                    {renderOption('Invitation', <InvitationIcon />)}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: value.metricSize.oneSmall,
        ...style.layout.alignItemsStart,
        ...style.layout.justifyContentStart,
        ...style.gutter.paddingTop.largeHeightSpace,
        paddingLeft: 240,
        backgroundColor: value.color.transparent,
    },
    modalContent: {
        width: value.metricSize.extraLarge + 10,
        backgroundColor: value.color.white,
        borderRadius: value.metricSize.tiny,
        ...style.gutter.paddingVertical.small,
        elevation: 2,
    },
});

export default FilterHistoryModal;
