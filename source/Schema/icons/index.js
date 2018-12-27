import { getKeyValues } from 'Schema/utils';
import hamburger from './properties/hamburger';
import search from './properties/search';
import basket from './properties/basket';
import telephone from './properties/telephone';
import categories from './properties/categories';
import novelties from './properties/novelties';
import discounts from './properties/discounts';
import gift from './properties/gift';
import timer from './properties/timer';
import cart from './properties/cart';
import inCart from './properties/inCart';
import mail from './properties/mail';
import phone from './properties/phone';
import back from './properties/back';
import loadMore from './properties/loadMore';
import arrowRight from './properties/arrowRight';
import arrowUp from './properties/arrowUp';
import arrowDown from './properties/arrowDown';
import listView from './properties/listView';
import galleryView from './properties/galleryView';
import largeView from './properties/largeView';
import noImage from './properties/noImage';


const NAME = 'icons';


const properties = Object.assign(
    {},
    hamburger,
    search,
    basket,
    telephone,
    categories,
    novelties,
    discounts,
    gift,
    timer,
    cart,
    inCart,
    mail,
    phone,
    back,
    loadMore,
    arrowRight,
    arrowUp,
    arrowDown,
    listView,
    galleryView,
    largeView,
    noImage,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Иконки используемые в дизайне',
        additionalProperties: false,
        required,
        properties,
        ui,
    },
};
