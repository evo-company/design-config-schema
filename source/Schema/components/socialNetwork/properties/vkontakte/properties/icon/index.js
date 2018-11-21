import { getKeyValues } from 'Schema/utils';
import file from './properties/file';
import color from './properties/color';
import hoverColor from './properties/hoverColor';


const NAME = 'icon';


const properties = Object.assign({}, file, color, hoverColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"vkontakte" icon',
        additionalProperties: false,
        required,
        properties,
        ui,
    },
};
