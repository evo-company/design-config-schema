export function generateNavigationLinkData({ basic, catalogItem }) {
    const fontFamily = basic.fontFamily;
    const backgroundColor = catalogItem.backgroundColor;
    const backgroundHoverColor = catalogItem.backgroundColor;
    const textColor = basic.linkColor;
    const textHoverColor = basic.linkHoverColor;
    const icon = {
        file: '',
        color: textColor,
        hoverColor: textHoverColor,
    };
    return {
        fontFamily, backgroundColor, backgroundHoverColor, textColor,
        textHoverColor, icon,
    };
};
