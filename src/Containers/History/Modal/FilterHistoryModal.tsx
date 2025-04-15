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

const FilterHistoryModal: React.FC<Props> = ({ visible, onclose, onPress }) => {
    const theme = useTheme();
    const { value } = theme;

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
                    borderBottomWidth: 1,
                    width: 110,
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
                    <View style={{ marginLeft: 10 }}>
                        {React.cloneElement(IconComponent, { color: iconColor })}
                    </View>
                    <AppText 
                        variant="smallText"
                        style={{
                            color: iconColor,
                            marginLeft: 10,
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
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 60,
        paddingLeft: 230,
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
    },
    modalContent: {
        width: 115,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 10,
        elevation: 2,
    },
});

export default FilterHistoryModal;
