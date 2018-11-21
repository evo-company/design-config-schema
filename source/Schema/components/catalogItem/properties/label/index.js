import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';
import backgroundColor from './properties/backgroundColor';


const NAME = 'label';


const properties = Object.assign({}, textColor, backgroundColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Product label',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
