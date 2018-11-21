import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';
import backgroundColor from './properties/backgroundColor';
import title from './properties/title';


const NAME = 'portfolioItem';


const properties = Object.assign({}, textColor, backgroundColor, title);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Item of a portfolio list',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
