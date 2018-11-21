import { getKeyValues, getRequiredPropertyKeys } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import textColor from './properties/textColor';
import fontFamily from './properties/fontFamily';
import linkColor from './properties/linkColor';
import linkHoverColor from './properties/linkHoverColor';
import externalFontFamily from './properties/externalFontFamily';
import themePrimaryColor from './properties/themePrimaryColor';
import themeSecondaryColor from './properties/themeSecondaryColor';


const NAME = 'basic';


const properties = Object.assign(
    {},
    externalFontFamily,
    fontFamily,
    themePrimaryColor,
    themeSecondaryColor,
    backgroundColor,
    textColor,
    linkColor,
    linkHoverColor,
);
const required = getRequiredPropertyKeys(
    Object.keys(properties),
    [Object.keys(externalFontFamily)[0]]
);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Basic design styles',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
