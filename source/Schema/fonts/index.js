import { getKeyValues, getRequiredPropertyKeys } from 'Schema/utils';
import fontFamily from './properties/fontFamily';
import googleFontUrl from './properties/googleFontUrl';


const NAME = 'fonts';


const properties = Object.assign({}, googleFontUrl, fontFamily);
const required = getRequiredPropertyKeys(
    Object.keys(properties),
    [Object.keys(googleFontUrl)[0]]
);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Шрифты используемые в дизайне',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
