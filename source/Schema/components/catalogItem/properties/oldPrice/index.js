import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';


const NAME = 'oldPrice';


const properties = Object.assign({}, textColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Product old price',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
