import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';
import textColor from './properties/textColor';
import textHoverColor from './properties/textHoverColor';
import backgroundColor from './properties/backgroundColor';
import backgroundHoverColor from './properties/backgroundHoverColor';
import fontFamily from './properties/fontFamily';
import iconActive from './properties/iconActive';
import backgroundActiveColor from './properties/backgroundActiveColor';
import textActiveColor from './properties/textActiveColor';
import iconContactUs from './properties/iconContactUs';


const NAME = 'buyButton';


const properties = Object.assign(
    {},
    fontFamily,
    icon,
    textColor,
    textHoverColor,
    backgroundColor,
    backgroundHoverColor,
    iconActive,
    backgroundActiveColor,
    textActiveColor,
    iconContactUs,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Buy button',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
