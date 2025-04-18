import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoute } from './AppRoute';
import HomeScreen from "../../Screen/HomeScreen";
import { useTheme } from "../../Hooks/useTheme";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../../Screen/SplashScreen";
import NavigationManager from "./NavigationManager";
import AppHeader from "../../Components/AppHeader";
import SignInConatiner from "../../Containers/SignIn/Screen/SignInConatiner";
import SignUp from "../../Containers/SignIn/Screen/SignUp";
import VerifyYourOTP from "../../Containers/SignIn/Screen/VerifyYourOTP";
import loginScreen from "../../Containers/SignIn/Screen/loginScreen";
import LoginVerify from "../../Containers/SignIn/Screen/LoginVerify";
import EventContainer from "../../Containers/MyEvents/Screen/EventContainer";
import TabButton from "../../Components/TabButton";
import Tab from "../../Components/Tab";
import HistoryContainer from "../../Containers/History/Screen/HistoryContainer";
import AppMainHeader from "../../Components/AppMainHeader";
import FavoriteScreen from "../../Containers/History/Screen/FavoriteScreen";
import WeddingCard from "../../Containers/ReviewEvent/Screen/WeddingCard";
import WeddingApplictionCard from "../../Screen/WeddingApplictionCard";
import { THEME_DEFAULT_IMAGE } from "../../Theme/Default/Image";
import GuestListConatiner from "../../Containers/GuestList/Screen/GuestListConatiner";
import ProfileData from "../../MyProfile/Screen/ProfileData";
import ImagePickerScreen from "../../Components/ImagePickerModal";



const Stack = createNativeStackNavigator();

const AppRouter = () => {
    const theme = useTheme();
    const { reactTheme, value } = theme;
    return (
        <NavigationContainer
            theme={reactTheme}
            ref={NavigationManager.navigationRef}
            onReady={NavigationManager.onReady}
            onStateChange={NavigationManager.onChange}
        >
            <Stack.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: value.color.white },
                }}
            >
                <Stack.Screen
                    name={AppRoute.HOMESCREEN}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AppRoute.SPLASHSCREEN}
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AppRoute.SIGNINCONTAINER}
                    component={SignInConatiner}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AppRoute.SIGNINUP}
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name={AppRoute.VERIFYOTP}
                    component={VerifyYourOTP}
                    options={{ headerShown: false, presentation: 'modal' }}
                /> */}
                <Stack.Screen
                    name={AppRoute.LOGINSCREEN}
                    component={loginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AppRoute.LOGINVERIFY}
                    component={LoginVerify}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name={AppRoute.EVENTCONTAINER}
                    component={EventContainer}
                    options={{
                        headerShown: false
                    }}
                /> */}
                <Stack.Screen
                    name={AppRoute.TABSCREEN}
                    component={TabButton}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AppRoute.TABS}
                    component={Tab}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AppRoute.HISTORY_CONTAINER}
                    component={HistoryContainer}
                    options={{
                        header: () => (
                            <AppMainHeader icon="tune" />
                        ),
                    }}
                />
                <Stack.Screen
                    name={AppRoute.FAVORITESCREEB}
                    component={FavoriteScreen}
                    options={{
                        header: () => (
                            <AppMainHeader titleText="Favorite" />
                        ),
                    }}
                />
                <Stack.Screen
                    name={AppRoute.WEDDINGCARD}
                    component={WeddingCard}
                    options={{
                        header: () => (
                            <AppMainHeader titleText="Review Event" Contact={THEME_DEFAULT_IMAGE} />

                        ),
                    }}
                />
                <Stack.Screen
                    name={AppRoute.WEDDINGAPPLICTIONCARD}
                    component={WeddingApplictionCard}
                    options={{
                        header: () => (
                            <AppMainHeader titleText="Review Event" Contact={THEME_DEFAULT_IMAGE} />
                        ),
                    }}
                />
                <Stack.Screen
                    name={AppRoute.GuestListConatiner}
                    component={GuestListConatiner}
                    options={{
                        header: () => (
                            <AppMainHeader titleText="Review Event" favorite={THEME_DEFAULT_IMAGE} />
                        ),
                    }}
                />
                <Stack.Screen
                    name={AppRoute.MYPROFILE}
                    component={ProfileData}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppRouter;
