import { Dimensions, PixelRatio } from "react-native";

export enum AppFontFamily {
    POPPINS_REGULAR = "Poppins-Regular",
    POPPINS_BLACK = "Poppins-Black",
    POPPINS_MEDIUM = "Poppins-Medium",
    POPPINS_BOLD = "Poppins-Bold",
    POPPINS_LIGHT = "Poppins-Light",
    POPPINS_SEMI_BOLD = "Poppins-SemiBold",
}
const REFERENCE_DIMENSION = 380;

export function normalize(dimension: number): number {
    return dimension;
}

let screenWidth = Dimensions.get("window").width;

let screenHeight = Dimensions.get("window").height;

const widthPercentageToDP = (widthPercent: string) => {
    const elemWidth =
        typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: string) => {
    const elemHeight =
        typeof heightPercent === "number"
            ? heightPercent
            : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that: {
    setState: (arg0: { orientation: string }) => void;
}) => {
    Dimensions.addEventListener("change", (newDimensions) => {
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;

        that.setState({
            orientation: screenWidth < screenHeight ? "portrait" : "landscape",
        });
    });
};

const Size = {
    navigationBar: {
        heightCollapsed: 56,
    },
    squareButton: {
        size: 48,
    },
    userImage: {
        size: 65,
    },
};
export {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange,
    Size,
};
