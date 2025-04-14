import GroupData from "../../Assets/Svgs/GroupData.svg"


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

    },
    Template: {
        template: require('./../../Assets/Fonts/Images/template.png'),
        GroupData
    },
};

export type ThemeImageSet = typeof THEME_DEFAULT_IMAGE;
