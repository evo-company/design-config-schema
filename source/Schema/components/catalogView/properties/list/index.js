import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';


const NAME = 'list';


const properties = Object.assign({}, icon);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"List" view type button',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
