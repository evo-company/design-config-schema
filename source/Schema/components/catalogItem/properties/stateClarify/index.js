import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';


const NAME = 'stateClarify';


const properties = Object.assign({}, textColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Product "clarify availability" indicator',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
