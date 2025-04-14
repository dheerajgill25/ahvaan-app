import VerifyYourOTP from '../../Containers/SignIn/Screen/VerifyYourOTP';


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


};
