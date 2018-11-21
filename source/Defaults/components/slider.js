import { getTextColor } from 'tinycolor';


export function generateSliderData({ basic, catalogItem }) {
    const navigation = {
        backgroundColor: catalogItem.backgroundColor,
        backgroundActiveColor: basic.themePrimaryColor,
    };
    const arrowPrev = {
        icon: {
            file: '',
            color: getTextColor(catalogItem.backgroundColor, basic.textColor),
            hoverColor: getTextColor(basic.themePrimaryColor, basic.textColor),
        },
        backgroundColor: catalogItem.backgroundColor,
        backgroundHoverColor: basic.themePrimaryColor,
    };
    const arrowNext = {
        icon: {
            file: '',
            color: getTextColor(catalogItem.backgroundColor, basic.textColor),
            hoverColor: getTextColor(basic.themePrimaryColor, basic.textColor),
        },
        backgroundColor: catalogItem.backgroundColor,
        backgroundHoverColor: basic.themePrimaryColor,
    };
    return { navigation, arrowPrev, arrowNext };
};
