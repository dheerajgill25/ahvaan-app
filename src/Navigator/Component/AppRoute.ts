import VerifyYourOTP from '../../Containers/SignIn/Screen/VerifyYourOTP';
import FavoriteScreen from '../../Containers/History/Screen/FavoriteScreen';
import WeddingCard from '../../Containers/ReviewEvent/Screen/WeddingCard';


export enum AppRoute {
    HOMESCREEN = "HomeScreen",
    SPLASHSCREEN = "SplashScreen",
    SIGNINCONTAINER = "SignInScreen",
    SIGNINUP = "SignInUp",
    VERIFYOTP = "VerifyOtp",
    LOGINSCREEN = "LoginScreen",
    LOGINVERIFY = "LoginVerify",
    EVENTCONTAINER = "EventConterner",
    TABSCREEN = "TABSCREEN",
    TABS = "TABS",
    HISTORY_CONTAINER = "HistoryContainer",
    FAVORITESCREEB = "FavoriteScreen",
    WEDDINGCARD = "WeddingCard",
    WEDDINGAPPLICTIONCARD = "Wedding_Applictioncard",
    GuestListConatiner = "GuestListConatiner",
    MYPROFILE = "MyProfile",
}

export type AppRouteParam = {
    [AppRoute.HOMESCREEN]: undefined;
    [AppRoute.SPLASHSCREEN]: undefined;
    [AppRoute.SIGNINCONTAINER]: undefined;
    [AppRoute.SIGNINUP]: undefined;
    [AppRoute.VERIFYOTP]: undefined;
    [AppRoute.LOGINSCREEN]: undefined;
    [AppRoute.LOGINVERIFY]: undefined;
    [AppRoute.EVENTCONTAINER]: undefined;
    [AppRoute.TABSCREEN]: undefined;
    [AppRoute.TABS]: undefined;
    [AppRoute.HISTORY_CONTAINER]: undefined;
    [AppRoute.FAVORITESCREEB]: undefined;
    [AppRoute.WEDDINGCARD]: undefined;
    [AppRoute.WEDDINGAPPLICTIONCARD]: undefined;
    [AppRoute.GuestListConatiner]: undefined;
    [AppRoute.MYPROFILE]: undefined;


};
