import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';
import backgroundColor from './properties/backgroundColor';
import backgroundHoverColor from './properties/backgroundHoverColor';


const NAME = 'arrowPrev';


const properties = Object.assign({}, icon, backgroundColor, backgroundHoverColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: '"Previous" arrow',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
