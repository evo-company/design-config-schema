import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';
import textColor from './properties/textColor';
import textHoverColor from './properties/textHoverColor';
import backgroundColor from './properties/backgroundColor';
import backgroundHoverColor from './properties/backgroundHoverColor';
import fontFamily from './properties/fontFamily';


const NAME = 'navigationLink';


const properties = Object.assign(
    {},
    fontFamily,
    textColor,
    textHoverColor,
    backgroundColor,
    backgroundHoverColor,
    icon,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Navigation element (link) such as "show more", "read more", "more" etc.',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
