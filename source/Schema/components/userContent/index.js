import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';
import backgroundColor from './properties/backgroundColor';
import linkColor from './properties/linkColor';
import linkHoverColor from './properties/linkHoverColor';


const NAME = 'userContent';


const properties = Object.assign(
    {},
    textColor,
    backgroundColor,
    linkColor,
    linkHoverColor
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'User content',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
