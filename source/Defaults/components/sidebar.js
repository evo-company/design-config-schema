import { getColor, getTextColor } from 'tinycolor';


export function generateSidebarData({ basic, sidebar }) {
    const backgroundColor = sidebar.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    const linkColor = basic.linkColor;
    const linkHoverColor = getColor(backgroundColor, linkColor, 5);
    const title = { textColor, backgroundColor, fontFamily: basic.fontFamily };
    return { backgroundColor, textColor, linkColor, linkHoverColor, title }
};
