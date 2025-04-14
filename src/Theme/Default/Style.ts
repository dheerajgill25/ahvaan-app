import { Theme } from "@react-navigation/native";
import { fromPairs } from "lodash";
import { StyleSheet } from "react-native";
import { ThemeColor, ThemeFontSize, ThemeMetricSize } from "./Value";
import { AppFontFamily, normalize } from "../Utils";
function doCreateThemeInputStyle(
    color: ThemeColor,
    metricSize: ThemeMetricSize,
    fontSize: ThemeFontSize
) {
    return StyleSheet.create({
        label: {
            textAlign: "center",
            fontSize: fontSize.inputLabel,
        },
        textInput: {
            borderColor: color.white,
            borderWidth: 1,
            borderRadius: 8,
            color: color.white,
            fontSize: fontSize.inputText,
            letterSpacing: 0,
        },
        choiceInput: {
            borderColor: color.white,
            borderWidth: 1,
            height: metricSize.choiceHeight,
            color: color.black,
        },
    });
}

export type ThemeInputStyle = ReturnType<typeof doCreateThemeInputStyle>;
export const createThemeInputStyle: (
    color: ThemeColor,
    metricSize: ThemeMetricSize,
    fontSize: ThemeFontSize
) => ThemeInputStyle = doCreateThemeInputStyle;

function doCreateThemeLayoutStyle(
    metricSize: ThemeMetricSize,
    color: ThemeColor
) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.black,
            position: "relative",
            marginTop: metricSize.small
            // paddingHorizontal: metricSize.regular,
        },
        /* Column Layouts */
        column: {
            display: "flex",
            flexDirection: "column",
        },
        columnReverse: {
            display: "flex",
            flexDirection: "column-reverse",
        },
        columnCenter: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        columnVerticalCenter: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        columnHorizontalCenter: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        /* Row Layouts */
        row: {
            display: "flex",
            flexDirection: "row",
        },
        rowReverse: {
            display: "flex",
            flexDirection: "row-reverse",
        },
        rowCenter: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        rowVerticalCenter: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        rowHorizontalCenter: {
            flexDirection: "row",
            justifyContent: "center",
        },
        defaultTableRow: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: metricSize.small,
            minHeight: metricSize.tableRowHeight,
        },
        /* Default Layouts */
        center: {
            alignItems: "center",
            justifyContent: "center",
        },
        alignItemsCenter: {
            alignItems: "center",
        },
        alignItemsStart: {
            alignItems: "flex-start",
        },
        alignItemsEnd: {
            alignItems: "flex-end",
        },
        alignItemsStretch: {
            alignItems: "stretch",
        },
        textAlignCenter: {
            textAlign: "center",
        },
        textVerticalCenter: {
            textAlignVertical: "center",
        },
        textStart: {
            textAlign: "left",
        },
        textEnd: {
            textAlign: "right",
        },
        justifyContentCenter: {
            justifyContent: "center",
        },
        justifyContentAround: {
            justifyContent: "space-around",
        },
        justifyContentBetween: {
            justifyContent: "space-between",
        },
        justifyContentEnd: {
            justifyContent: "flex-end",
        },
        justifyContentStart: {
            justifyContent: "flex-start",
        },
        scrollSpaceAround: {
            flexGrow: 1,
            justifyContent: "space-around",
        },
        scrollSpaceBetween: {
            flexGrow: 1,
            justifyContent: "space-between",
        },
        selfStretch: {
            alignSelf: "stretch",
        },
        selfCenter: {
            alignSelf: "center",
        },
        selfEnd: {
            alignSelf: "flex-end",
        },
        forceBottom: {
            position: "absolute",
            bottom: 0,
        },
        forceTop: {
            position: "absolute",
            top: 0,
        },
        forceLeft: {
            position: "absolute",
            left: 0,
        },
        forceRight: {
            position: "absolute",
            right: 0,
        },
        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        overlayHorizontal: {
            position: "absolute",
            left: 0,
            right: 0,
        },
        countryCodeCenterOverlay: {
            position: "absolute",
            top: normalize(10),
            left: normalize(13),
        },
        modalBackground: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.white,
        },
        modalContent: {
            backgroundColor: color.white,
            shadowColor: color.black,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
        },
        /* Sizes Layouts */
        fill: {
            flex: 1,
        },

        consumeSpace: {
            flexGrow: 1,
        },
        square: {
            aspectRatio: 1,
        },
        fullSize: {
            height: "100%",
            width: "100%",
        },
        fullWidth: {
            width: "100%",
        },
        haffWidth: {
            width: "50%",
        },
        fullHeight: {
            height: "100%",
        },
        autoWidth: {
            width: "auto",
        },
        /* Operation Layout */
        mirror: {
            transform: [{ scaleX: -1 }],
        },
        rotate90: {
            transform: [{ rotate: "90deg" }],
        },
        rotate90Inverse: {
            transform: [{ rotate: "-90deg" }],
        },
        rotate45Inverse: {
            transform: [{ rotate: "-45deg" }],
        },
        round: {
            borderRadius: Number.MAX_SAFE_INTEGER,
        },
        /* Image Layout */
        aspectFill: {
            resizeMode: "cover",
        },
        aspectFit: {
            resizeMode: "contain",
        },
        zIndex: {
            zIndex: 9999,
        },
    });
}

export type ThemeLayoutStyle = ReturnType<typeof doCreateThemeLayoutStyle>;
export const createThemeLayoutStyle: (
    metricSize: ThemeMetricSize,
    color: ThemeColor
) => ThemeLayoutStyle = doCreateThemeLayoutStyle;

function doCreateThemeFontStyle(color: ThemeColor) {
    return StyleSheet.create({
        modalText: {
            color: color.black,
        },
        default: {
            fontFamily: AppFontFamily.POPPINS_REGULAR,
        },
        description: {
            fontFamily: AppFontFamily.POPPINS_REGULAR,
        },
        defaultBold: {
            fontFamily: AppFontFamily.POPPINS_BOLD,
        },
        defaultSemiBold: {
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        },
        alternative: {
            fontFamily: AppFontFamily.POPPINS_BOLD,
        },
        alternativeBold: {
            fontFamily: AppFontFamily.POPPINS_SEMI_BOLD,
        },
        title: {
            fontFamily: AppFontFamily.POPPINS_BOLD,
            letterSpacing: 0.05,
        },
        header: {
            fontFamily: AppFontFamily.POPPINS_BOLD,
        },
        neutral: {
            fontFamily: AppFontFamily.POPPINS_REGULAR,
        },
        error: {
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            color: color.danger,
        },
        success: {
            fontFamily: AppFontFamily.POPPINS_REGULAR,
            color: color.success,
        },

        // Deven: deprecated, do not use
        allCaps: {
            textTransform: "uppercase",
        },
        textCenter: {
            textAlign: "center",
        },
        textUnderline: {
            textDecorationLine: "underline",
        },
    });
}

export type ThemeFontStyle = ReturnType<typeof doCreateThemeFontStyle>;
export const createThemeFontStyle: (color: ThemeColor) => ThemeFontStyle =
    doCreateThemeFontStyle;

const gutterTypes = [
    /* Margins */
    "margin",
    "marginBottom",
    "marginTop",
    "marginRight",
    "marginLeft",
    "marginVertical",
    "marginHorizontal",
    /* Paddings */
    "padding",
    "paddingBottom",
    "paddingTop",
    "paddingRight",
    "paddingLeft",
    "paddingVertical",
    "paddingHorizontal",
    /* Gap */
    "gap",
    "columnGap",
    "rowGap",
] as const;
type GutterType = (typeof gutterTypes)[number];
type MetricSizeType = keyof ThemeMetricSize;

function doCreateThemeGutterStyle(
    metricSize: ThemeMetricSize
): Record<GutterType, Record<MetricSizeType, Record<GutterType, number>>> {
    return StyleSheet.create(
        fromPairs(
            gutterTypes.map((gutterType) => [
                gutterType,
                fromPairs(
                    Object.entries(metricSize).map(([metricType, value]) => [
                        metricType,
                        { [gutterType]: value },
                    ])
                ),
            ])
        )
    ) as any;
}

export type ThemeGutterStyle = ReturnType<typeof doCreateThemeGutterStyle>;
export const createThemeGutterStyle: (
    metricSize: ThemeMetricSize
) => ThemeGutterStyle = doCreateThemeGutterStyle;

export function createThemeRNTheme(color: ThemeColor, base: Theme): Theme {
    return {
        ...base,
        dark: false,
        colors: {
            ...base.colors,
            primary: color.black,
            background: base.colors.background,
        },
    };
}
