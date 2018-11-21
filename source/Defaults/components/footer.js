import { getTextColor } from 'tinycolor';


export function generateFooterData({ basic, footer }) {
    const backgroundColor = footer.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    return {
        textColor, backgroundColor,
        linkColor: textColor,
        linkHoverColor: basic.linkHoverColor
    };
};
