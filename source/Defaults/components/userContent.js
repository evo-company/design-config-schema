import { getColor, getTextColor } from 'tinycolor';


export function generateUserContentData({ basic, catalogItem }) {
    const backgroundColor = catalogItem.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    const linkColor = basic.linkColor;
    const linkHoverColor = getColor(backgroundColor, linkColor, 5);
    return { textColor, backgroundColor, linkColor, linkHoverColor };
};
