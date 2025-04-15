import GroupData from "../../Assets/Svgs/GroupData.svg"
import error from "../../Assets/Svgs/error.svg"
import GroupCard from "../../Assets/Svgs/GroupCard.svg"
import error2 from "../../Assets/Svgs/error2.svg"
import Icon1 from "../../Assets/Svgs/Icon1.svg"
import Icon2 from "../../Assets/Svgs/Icon2.svg"
import Icon3 from "../../Assets/Svgs/Icon3.svg"
import Icon4 from "../../Assets/Svgs/icon4.svg"
import Frame from "../../Assets/Svgs/Frame.svg"
import Obeject from "../../Assets/Svgs/Object.svg"
import HeaderIocn from "../../Assets/Svgs/Layer_1.svg"
import Heart from "../../Assets/Svgs/material-symbols_favorite.svg"
import Delete from "../../Assets/Svgs/fluent_delete.svg"
import FrameNotifition from "../../Assets/Svgs/FrameNotifiction.svg"
import Capa_1 from "../../Assets/Svgs/Capa_1.svg"

import Vector2 from "../../Assets/Svgs/Vector (2).svg"
import Vector3 from "../../Assets/Svgs/Vector (3).svg"
import Vector4 from "../../Assets/Svgs/Vector (4).svg"
import Vector5 from "../../Assets/Svgs/Vector (5).svg"
import Vector6 from "../../Assets/Svgs/Vector (6).svg"
import Vector7 from "../../Assets/Svgs/arcticons_security.svg"
import Subscription from "../../Assets/Svgs/streamline_subscription-cashflow.svg"
import Loction from "../../Assets/Svgs/basil_location-outline.svg"
import Hide from "../../Assets/Svgs/material-symbols-light_delete-outline-rounded.svg"
import Update from "../../Assets/Svgs/material-symbols-light_update.svg"
import LogOut from "../../Assets/Svgs/mynaui_logout.svg"
import UserImage from "../../Assets/Svgs/Ellipse 215.svg"
import Edit from "../../Assets/Svgs/iconamoon_edit-bold.svg"

export const THEME_DEFAULT_IMAGE = {

    AppHomeScreenImages: {
        inviteImage1: require('./../../Assets/Fonts/Images/GroupImage1.png'),
        inviteImage2: require('./../../Assets/Fonts/Images/GroupImage2.png'),
        inviteImage3: require('./../../Assets/Fonts/Images/GroupImage3.png'),
    },
    BackGroundImageScreen: {
        backimage: require('./../../Assets/Fonts/Images/BackgroundImage.png'),
        GroupCard
    },
    AppSplashScreenImages: {
        splashImage1: require('./../../Assets/Fonts/Images/EllipseRight.png'),
        splashImage2: require('./../../Assets/Fonts/Images/EllipseRound.png'),
        splashImage3: require('./../../Assets/Fonts/Images/VectorTop.png'),
    },
    GurupImage: {
        groupImage1: require('./../../Assets/Fonts/Images/Group.png'),
        groupData: require('./../../Assets/Fonts/Images/GroupDataNotFound.png'),
        groupData2: require('./../../Assets/Fonts/Images/Group2.png'),
        groupData3: require('./../../Assets/Fonts/Images/group3.png'),
        errorPng: require('./../../Assets/Fonts/Images/error.png'),

    },
    Template: {
        template: require('./../../Assets/Fonts/Images/template.png'),
        template2: require('./../../Assets/Fonts/Images/template@2.png'),
        GroupData,
        error,
        error2
    },
    IconModal: {
        icon1: require('./../../Assets/Fonts/Images/Icon1.png'),
        frame: require('./../../Assets/Fonts/Images/Frame.png'),
        layer: require('./../../Assets/Fonts/Images/Layer_1.png'),
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Frame,
        Obeject,
        HeaderIocn,
        Heart

    }
    ,
    ContainerCart: {
        Delete,
        FrameNotifition,
        Capa_1

    },
    MyProfile: {
        Vector2,
        Vector3,
        Vector4,
        Vector5,
        Vector6,
        Vector7,
        Subscription,
        Loction,
        Hide,
        Update,
        LogOut,
        UserImage,
        Edit


    }
};

export type ThemeImageSet = typeof THEME_DEFAULT_IMAGE;
