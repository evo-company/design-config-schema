import { getKeyValues } from './utils';
import colors from './colors';
import icons from './icons';


const properties = Object.assign({}, colors, icons);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    type: 'object',
    description: 'Design settings',
    additionalProperties: false,
    required,
    properties,
    ui,
};
