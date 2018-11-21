import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import textColor from './properties/textColor';
import linkColor from './properties/linkColor';
import linkHoverColor from './properties/linkHoverColor';
import title from './properties/title';


const NAME = 'sidebar';


const properties = Object.assign(
    {},
    textColor,
    backgroundColor,
    linkColor,
    linkHoverColor,
    title,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Sidebar is a left|right part of the website',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
