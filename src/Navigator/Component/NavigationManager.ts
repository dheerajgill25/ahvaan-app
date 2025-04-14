// import LoggerInstance from "@/Repo/Logger";
import {
    CommonActions,
    createNavigationContainerRef,
    DrawerActionType,
    NavigationContainerRefWithCurrent,
    StackActionType,
} from "@react-navigation/native";
import { AppRouteParam } from "./AppRoute";
import LoggerInstance from "../../Repo/Logger";


class Navigation {
    public navigationRef = createNavigationContainerRef<AppRouteParam>();

    private routeName?: string;

    private static doWithNavigationRef = (
        action: (ref: NavigationContainerRefWithCurrent<AppRouteParam>) => void
    ) => {
        if (NavigationManager.navigationRef.isReady()) {
            action(NavigationManager.navigationRef);
        } else {
            console.error("Trying to navigation before being ready!");
        }
    };

    private registerNewScreen = async () => {
        const currentRoute =
            NavigationManager.navigationRef.current?.getCurrentRoute();
        if (
            currentRoute?.name !== undefined &&
            currentRoute?.name !== this.routeName
        ) {
            LoggerInstance.logScreen(
                currentRoute?.name,
                currentRoute?.path || currentRoute?.name,
                currentRoute.params
            );
            this.routeName = currentRoute?.name;
        }
    };

    onReady = async () => this.registerNewScreen();

    onChange = async () => this.registerNewScreen();

    dispatch = (
        action: CommonActions.Action | StackActionType | DrawerActionType
    ) => {
        Navigation.doWithNavigationRef((navigation) => {
            navigation.dispatch(action);
        });
    };
}
const NavigationManager = new Navigation();
export default NavigationManager;
