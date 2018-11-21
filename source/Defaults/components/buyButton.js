import tc, { getColor, getTextColor } from 'tinycolor';


export function generateBuyButtonData({ basic, buyButton }) {
    const backgroundColor = buyButton.backgroundColor;
    const backgroundHoverColor = getColor(backgroundColor, backgroundColor, 5);
    const backgroundActiveColor = tc(backgroundColor).relativelyDesaturate(50).toText();
    const fontFamily = basic.fontFamily;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    const textHoverColor = getTextColor(backgroundHoverColor, basic.textColor);
    const textActiveColor = getTextColor(backgroundActiveColor, basic.textColor);
    const icon = {
        file: '',
        color: textColor,
        hoverColor: textHoverColor,
    };
    const iconActive = {
        file: '',
        color: textActiveColor,
        hoverColor: textActiveColor,
    };
    const iconContactUs = {
        file: '',
        color: textColor,
        hoverColor: textHoverColor,
    };
    return {
        icon, textColor, textHoverColor, backgroundColor, backgroundHoverColor,
        iconActive, textActiveColor, backgroundActiveColor, iconContactUs, fontFamily,
    }
};
