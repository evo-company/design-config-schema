import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import borderColor from './properties/borderColor';
import textColor from './properties/textColor';


const NAME = 'button';


const properties = Object.assign(
    {},
    textColor,
    borderColor,
    backgroundColor,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Promo panel button',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
