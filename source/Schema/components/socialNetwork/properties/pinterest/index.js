import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';


const NAME = 'pinterest';


const properties = Object.assign({}, icon);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Social network: "pinterest"',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
