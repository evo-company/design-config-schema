import tc, { getTextColor } from 'tinycolor';


export function generatePortfolioItemData({ basic, catalogItem }) {
    const backgroundColor = catalogItem.backgroundColor;
    const title = {
        textColor: getTextColor(backgroundColor, basic.textColor),
    };
    const textColor = tc(title.textColor).setAlpha(0.85).toText();
    return { textColor, backgroundColor, title };
};
