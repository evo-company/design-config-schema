import { getKeyValues } from 'Schema/utils';
import file from './properties/file';
import color from './properties/color';
import activeColor from './properties/activeColor';


const NAME = 'icon';


const properties = Object.assign({}, file, color, activeColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"List" view type icon',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
