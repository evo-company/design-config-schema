import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import counter from './properties/counter';
import title from './properties/title';


const NAME = 'groupItem';


const properties = Object.assign({}, backgroundColor, title, counter);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Item of a group list',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
