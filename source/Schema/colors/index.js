import { getKeyValues } from 'Schema/utils';
import linkColor from './properties/linkColor';
import headerBackgroundColor from './properties/headerBackgroundColor';
import menuBackgroundColor from './properties/menuBackgroundColor';
import menuColor from './properties/menuColor';
import siteBackgroundColor from './properties/siteBackgroundColor';
import labelBackgroundColor from './properties/labelBackgroundColor';
import buttonBackgroundColor from './properties/buttonBackgroundColor';


const NAME = 'colors';


const properties = Object.assign(
    {},
    linkColor,
    siteBackgroundColor,
    headerBackgroundColor,
    labelBackgroundColor,
    buttonBackgroundColor,
    menuBackgroundColor,
    menuColor,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Цвета используемые в дизайне',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
