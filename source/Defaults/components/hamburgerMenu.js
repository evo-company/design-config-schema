import { getTextColor } from 'tinycolor';


export function generateHamburgerMenuData({ basic, horizontalMenu }) {
    const backgroundColor = horizontalMenu.backgroundColor;
    const textColor = getTextColor(backgroundColor, basic.textColor);
    const hamburger = {
        icon: {
            file: '',
            color: textColor,
        }
    };
    const search = {
        icon: {
            file: '',
            color: textColor,
        }
    };
    const cart = {
        icon: {
            file: '',
            color: textColor,
        }
    };
    const phone = {
        icon: {
            file: '',
            color: textColor,
        }
    };
    return { backgroundColor, textColor, hamburger, search, cart, phone };
};
