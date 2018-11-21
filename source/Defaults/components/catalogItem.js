import tc, { getTextColor } from 'tinycolor';


export function generateCatalogItemData({ basic, catalogItem }) {
    const { backgroundColor, stateAvailable, stateOrder, stateClarify } = catalogItem;
    const title = {
        textColor: getTextColor(backgroundColor, basic.textColor),
    };
    const label = {
        textColor: getTextColor(basic.themePrimaryColor, basic.textColor),
        backgroundColor: basic.themePrimaryColor,
    };
    const price = {
        textColor: getTextColor(backgroundColor, basic.textColor),
    };
    const oldPrice = {
        textColor: tc(price.textColor).setAlpha(0.85).toText(),
    };
    const gift = {
        icon: {
            file: '',
            color: label.textColor,
        },
    };
    const timer = {
        icon: {
            file: '',
            color: label.textColor,
        },
    };
    return {
        backgroundColor, stateAvailable, stateOrder, stateClarify, title, label,
        price, oldPrice, gift, timer,
    };
};
