import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';


const NAME = 'products';


const properties = Object.assign({}, icon);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"Products" button/link',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
