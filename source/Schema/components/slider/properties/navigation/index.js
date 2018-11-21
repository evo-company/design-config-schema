import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import backgroundActiveColor from './properties/backgroundActiveColor';


const NAME = 'navigation';


const properties = Object.assign({}, backgroundColor, backgroundActiveColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Slider navigation',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
