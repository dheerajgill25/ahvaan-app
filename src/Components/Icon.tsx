import React from "react";
import { TextStyle } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SizeProps, StyleProps } from "./Props";

export type BaseIconProps = StyleProps<TextStyle> &
    SizeProps & { color?: string; size: number };

const BaseIonIcon = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return <IonIcon style={style} name={name} size={size} color={color} />;
};

const BaseFontAwesome5Icon = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return (
        <FontAwesome5Icon style={style} name={name} size={size} color={color} />
    );
};

const BaseSimpleLineIcon = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return <SimpleLineIcon style={style} name={name} size={size} color={color} />;
};

const BaseFoundationIcon = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return <FoundationIcon style={style} name={name} size={size} color={color} />;
};

const BaseFontAwesomeIcon = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return (
        <FontAwesomeIcon style={style} name={name} size={size} color={color} />
    );
};

const BaseOcticonsIcon = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return <Octicons style={style} name={name} size={size} color={color} />;
};

const BaseMaterialIcons = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return <MaterialIcons style={style} name={name} size={size} color={color} />;
};

const BaseMaterialCommunityIcons = ({
    style,
    size,
    name,
    color,
}: BaseIconProps & { name: string }) => {
    //@ts-ignore
    return (
        <MaterialCommunityIcons
            style={style}
            name={name}
            size={size}
            color={color}
        />
    );
};

export const ShareIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="share-social" />
);

export const CameraIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="camera-outline" />
);

export const HomeIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="home-outline" />
);

export const CartIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="ios-cart-outline" />
);

export const HistoryIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons {...props} name="history" />
);

export const BikeIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons {...props} name="motorbike" />
);

export const GraduationIcon = (props: BaseIconProps) => (
    <BaseSimpleLineIcon {...props} name="graduation" />
);

export const NotesIcon = (props: BaseIconProps) => (
    <BaseFoundationIcon {...props} name="clipboard-notes" />
);
export const VerifiedIcon = (props: BaseIconProps) => (
    <BaseMaterialIcons {...props} name="verified-user" />
);
export const LocationPinIcon = (props: BaseIconProps) => (
    <BaseSimpleLineIcon {...props} name="location-pin" />
);

export const ProfileIcon = (props: BaseIconProps) => (
    <BaseFontAwesomeIcon {...props} name="user-circle-o" />
);

export const UserOutlineIcon = (props: BaseIconProps) => (
    <BaseFontAwesomeIcon {...props} name="user" />
);

export const SortIcon = (props: BaseIconProps) => (
    <BaseFontAwesomeIcon {...props} name="sort" />
);

export const QrCodeIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="qr-code-outline" />
);

export const PhoneIcon = (props: BaseIconProps) => (
    <BaseSimpleLineIcon {...props} name="phone" />
);

export const CheckCircleIcon = (props: BaseIconProps) => (
    <BaseOcticonsIcon {...props} name="check-circle-fill" />
);

export const CheckIcon = (props: BaseIconProps) => (
    <BaseOcticonsIcon {...props} name="check" />
);

export const CircleEmptyIcon = (props: BaseIconProps) => (
    <BaseOcticonsIcon {...props} name="circle" />
);

export const CloseIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="close" />
);
export const CloseCircleIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="close-circle" />
);

export const CheckFillIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="checkmark-circle" />
);

export const FilterIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="filter-outline" />
);

export const AddIcon = (props: BaseIconProps) => (
    <BaseOcticonsIcon {...props} name="plus" />
);

export const StopwatchIcon = (props: BaseIconProps) => (
    <BaseOcticonsIcon {...props} name="stopwatch" />
);

export const MenuIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="menu" />
);

export const SearchIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="search" />
);
export const SmileIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="slightly-smile" />
);

export const LocationIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="ios-location-sharp" />
);

export const OfferIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons {...props} name="brightness-percent" />
);

export const DotsIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons
        {...props}
        name="dots-horizontal-circle-outline"
    />
);

export const WalletIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="ios-wallet-outline" />
);

export const ChatIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="chatbox-outline" />
);
export const InfoIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="information-circle-outline" />
);

export const PaymentIcon = (props: BaseIconProps) => (
    <BaseMaterialIcons {...props} name="payment" />
);

export const SupportAgentIcon = (props: BaseIconProps) => (
    <BaseMaterialIcons {...props} name="support-agent" />
);
export const PencilIcon = (props: BaseIconProps) => (
    <BaseMaterialIcons {...props} name="edit" />
);
export const LogoutIcon = (props: BaseIconProps) => (
    <BaseMaterialIcons {...props} name="logout" />
);
export const BackpackIcon = (props: BaseIconProps) => (
    <BaseMaterialIcons {...props} name="backpack" />
);

export const AddressIcon = (props: BaseIconProps) => (
    <BaseFontAwesomeIcon {...props} name="address-book-o" />
);

export const ArrowForwardIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="arrow-forward-outline" />
);
export const ArrowBackIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="arrow-back-outline" />
);

export const UserIcon = (props: BaseIconProps) => (
    <BaseFontAwesome5Icon {...props} name="user-circle" />
);
export const BagIcon = (props: BaseIconProps) => (
    <BaseFontAwesome5Icon {...props} name="shopping-bag" />
);

export const ExclamationIcon = (props: BaseIconProps) => (
    <BaseFontAwesomeIcon {...props} name="exclamation-circle" />
);

export type StarIconProps = BaseIconProps & { empty?: boolean };
export const StarIcon = ({ empty, ...props }: StarIconProps) => (
    <BaseIonIcon {...props} name={`star${empty ? "-outline" : ""}`} />
);

export type ChevronProps = BaseIconProps & {
    direction?: "up" | "forward" | "down" | "back";
};
export const ChevronIcon = ({
    direction = "forward",
    ...props
}: ChevronProps) => <BaseIonIcon {...props} name={`chevron-${direction}`} />;

export type HeartProps = BaseIconProps & { filled: boolean };
export const HeartIcon = ({ filled, ...props }: HeartProps) => (
    <BaseIonIcon {...props} name={`ios-heart-${filled ? "sharp" : "outline"}`} />
);

export const NotificationIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="notifications-outline" />
);

export const EyeOnIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="eye-outline" />
);

export const EyeOffIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="eye-off-outline" />
);
export const CopyIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="ios-copy-outline" />
);

export const HelpIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="ios-help-outline" />
);

export const SendIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="ios-send" />
);

export const EditIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons {...props} name="circle-edit-outline" />
);

export const DeleteIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons {...props} name="delete-empty-outline" />
);

export const UpIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="arrow-up-outline" />
);

export const WhatsIcon = (props: BaseIconProps) => (
    <BaseIonIcon {...props} name="logo-whatsapp" />
);

export const ClockIcon = (props: BaseIconProps) => (
    <BaseMaterialCommunityIcons {...props} name="clock-outline" />
);

export const FbIcon = (props: BaseIconProps) => (
    <BaseSimpleLineIcon {...props} name="social-facebook" />
);
