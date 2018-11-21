import { getTextColor } from 'tinycolor';


export function generateHeaderData({ basic, header }) {
    const backgroundColor = header.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    return { backgroundColor, textColor };
};
