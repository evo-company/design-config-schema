import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import textColor from './properties/textColor';


const NAME = 'horizontalMenu';


const properties = Object.assign(
    {},
    textColor,
    backgroundColor,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Horizontal menu',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
