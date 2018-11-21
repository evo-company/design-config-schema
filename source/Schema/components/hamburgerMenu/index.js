import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';
import backgroundColor from './properties/backgroundColor';
import cart from './properties/cart';
import hamburger from './properties/hamburger';
import phone from './properties/phone';
import search from './properties/search';


const NAME = 'hamburgerMenu';


const properties = Object.assign(
    {},
    textColor,
    backgroundColor,
    hamburger,
    search,
    phone,
    cart,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Mobile top panel with menu, search, phone and cart buttons',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
