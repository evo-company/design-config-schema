import { getKeyValues } from 'Schema/utils';
import navigation from './properties/navigation';
import arrowPrev from './properties/arrowPrev';
import arrowNext from './properties/arrowNext';


const NAME = 'slider';


const properties = Object.assign({}, navigation, arrowPrev, arrowNext);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Website slider',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
