
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    FlexStyle,
    ImageStyle,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";
import { AppRoute, AppRouteParam } from "../Navigator/Component/AppRoute";

export type StyleProps<
    T extends ViewStyle | FlexStyle | ImageStyle | TextStyle
> = {
    style?: StyleProp<T>;
};

export type SizeProps<T extends "required" | undefined = undefined> =
    T extends "required" ? { size: number } : { size?: number };

export type AppRouteProps<T extends AppRoute> = {
    route: RouteProp<AppRouteParam, T>;
};
