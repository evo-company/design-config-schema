import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';


const NAME = 'twitter';


const properties = Object.assign({}, icon);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Social network: "twitter"',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
