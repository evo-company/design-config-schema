import { getKeyValues } from 'Schema/utils';
import list from './properties/list';
import gallery from './properties/gallery';
import large from './properties/large';


const NAME = 'catalogView';


const properties = Object.assign({}, list, gallery, large);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Mobile panel with product list view type buttons',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
