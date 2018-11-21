import { getTextColor } from 'tinycolor';


export function generateGroupItemData({ basic, catalogItem }) {
    const backgroundColor = catalogItem.backgroundColor;
    const title = {
        textColor: getTextColor(backgroundColor, basic.textColor),
    };
    const counter = {
        textColor: title.textColor,
    };
    return { backgroundColor, title, counter };
};
