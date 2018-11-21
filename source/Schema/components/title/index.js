import { getKeyValues } from 'Schema/utils';
import fontFamily from './properties/fontFamily';
import textColor from './properties/textColor';
import backgroundColor from './properties/backgroundColor';


const NAME = 'title';


const properties = Object.assign({}, fontFamily, textColor, backgroundColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Main title on webpage',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
