import GroupData from "../../Assets/Svgs/GroupData.svg"
import error from "../../Assets/Svgs/error.svg"


export const THEME_DEFAULT_IMAGE = {

    AppHomeScreenImages: {
        inviteImage1: require('./../../Assets/Fonts/Images/GroupImage1.png'),
        inviteImage2: require('./../../Assets/Fonts/Images/GroupImage2.png'),
        inviteImage3: require('./../../Assets/Fonts/Images/GroupImage3.png'),
    },
    BackGroundImageScreen: {
        backimage: require('./../../Assets/Fonts/Images/BackgroundImage.png'),
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
        error
    },
    IconModal: {
        icon1: require('./../../Assets/Fonts/Images/Icon1.png'),
        frame: require('./../../Assets/Fonts/Images/Frame.png'),
        layer: require('./../../Assets/Fonts/Images/Layer_1.png')
    }
};

export type ThemeImageSet = typeof THEME_DEFAULT_IMAGE;
