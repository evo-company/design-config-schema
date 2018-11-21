import { getKeyValues } from 'Schema/utils';
import file from './properties/file';
import color from './properties/color';


const NAME = 'icon';


const properties = Object.assign({}, file, color);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"Cart" icon',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
