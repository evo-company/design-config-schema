import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import textColor from './properties/textColor';
import button from './properties/button';


const NAME = 'promoPanel';


const properties = Object.assign(
    {},
    textColor,
    backgroundColor,
    button,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Promo panel',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
