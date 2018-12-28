import { getKeyValues } from './utils';
import fonts from './fonts';
import colors from './colors';
import icons from './icons';


const properties = Object.assign({}, fonts, colors, icons);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    type: 'object',
    description: 'Настройки дизайна',
    additionalProperties: false,
    required,
    properties,
    ui,
};
