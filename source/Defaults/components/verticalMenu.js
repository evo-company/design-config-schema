import { getTextColor } from 'tinycolor';


export function generateVerticalMenuData({ basic, verticalMenu }) {
    const backgroundColor = verticalMenu.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    return { backgroundColor, textColor }
};
