import { getKeyValues } from 'Schema/utils';
import color from './properties/color';
import file from './properties/file';
import hoverColor from './properties/hoverColor';


const NAME = 'iconContactUs';


const properties = Object.assign({}, file, color, hoverColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"Contact us" button icon',
        additionalProperties: false,
        required,
        properties,
        ui,
    },
};
