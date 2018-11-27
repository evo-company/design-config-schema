import { getKeyValues } from './utils';
import basic from './basic';
import promoPanel from './components/promoPanel';
import title from './components/title';
import buyButton from './components/buyButton';
import header from './components/header';
import slider from './components/slider';
import categories from './components/categories';
import sidebar from './components/sidebar';
import horizontalMenu from './components/horizontalMenu';
import verticalMenu from './components/verticalMenu';
import hamburgerMenu from './components/hamburgerMenu';
import groupItem from './components/groupItem';
import catalogView from './components/catalogView';
import catalogItem from './components/catalogItem';
import portfolioItem from './components/portfolioItem';
import userContent from './components/userContent';
import navigationLink from './components/navigationLink';
import footer from './components/footer';
import socialNetwork from './components/socialNetwork';


const properties = Object.assign(
    {},
    basic,
    promoPanel,
    title,
    buyButton,
    header,
    slider,
    categories,
    sidebar,
    horizontalMenu,
    verticalMenu,
    hamburgerMenu,
    groupItem,
    catalogView,
    catalogItem,
    portfolioItem,
    userContent,
    navigationLink,
    footer,
    socialNetwork,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    type: 'object',
    description: 'Design settings',
    additionalProperties: false,
    required,
    properties,
    ui,
};
