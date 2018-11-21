import { getTextColor } from 'tinycolor';


export function generateHorizontalMenuData({ basic, horizontalMenu }) {
    const backgroundColor = horizontalMenu.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    return { backgroundColor, textColor }
};
