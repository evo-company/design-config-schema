import { getTextColor } from 'tinycolor';


export function generateTitleData({ basic, catalogItem }) {
    const fontFamily = basic.fontFamily;
    const backgroundColor = catalogItem.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    return { fontFamily, textColor, backgroundColor };
};
