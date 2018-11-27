import { getKeyValues } from 'Schema/utils';
import textColor from './properties/textColor';
import products from './properties/products';
import newProducts from './properties/newProducts';
import sales from './properties/sales';


const NAME = 'categories';


const properties = Object.assign({}, textColor, products, newProducts, sales);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Mobile panel with "product list", "sales" and "new products" links',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
