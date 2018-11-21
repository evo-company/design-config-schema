import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';


const NAME = 'gift';


const properties = Object.assign({}, icon);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Gift label of the product list item',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
