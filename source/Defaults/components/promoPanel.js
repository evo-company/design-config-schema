import { getTextColor } from 'tinycolor';


export function generatePromoPanelData({ basic, promoPanel }) {
    const backgroundColor = promoPanel.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    const button = { borderColor: textColor, textColor, backgroundColor };
    return { backgroundColor, textColor, button };
};
