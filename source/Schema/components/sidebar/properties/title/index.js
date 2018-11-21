import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import fontFamily from './properties/fontFamily';
import textColor from './properties/textColor';


const NAME = 'title';


const properties = Object.assign(
    {},
    fontFamily,
    textColor,
    backgroundColor,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Sidebar title',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
