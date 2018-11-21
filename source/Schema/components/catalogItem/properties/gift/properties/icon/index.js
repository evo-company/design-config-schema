import { getKeyValues } from 'Schema/utils';
import color from './properties/color';
import file from './properties/file';


const NAME = 'icon';


const properties = Object.assign({}, file, color);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Gift icon',
        additionalProperties: false,
        required,
        properties,
        ui,
    },
};
