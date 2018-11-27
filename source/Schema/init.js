import basic from './basic';
import promoPanel from './components/promoPanel';
import promoPanelBackgroundColor from './components/promoPanel/properties/backgroundColor';
import buyButton from './components/buyButton';
import buyButtonBackgroundColor from './components/buyButton/properties/backgroundColor';
import header from './components/header';
import headerBackgroundColor from './components/header/properties/backgroundColor';
import sidebar from './components/sidebar';
import sidebarBackgroundColor from './components/sidebar/properties/backgroundColor';
import horizontalMenu from './components/horizontalMenu';
import horizontalMenuBackgroundColor from './components/horizontalMenu/properties/backgroundColor';
import verticalMenu from './components/verticalMenu';
import verticalMenuBackgroundColor from './components/verticalMenu/properties/backgroundColor';
import catalogItem from './components/catalogItem';
import catalogItemBackgroundColor from './components/catalogItem/properties/backgroundColor';
import catalogItemStateAvailable from './components/catalogItem/properties/stateAvailable';
import catalogItemStateClarify from './components/catalogItem/properties/stateClarify';
import catalogItemStateOrder from './components/catalogItem/properties/stateOrder';
import footer from './components/footer';
import footerBackgroundColor from './components/footer/properties/backgroundColor';


function init(component, properties) {
    const initComponent = JSON.parse(JSON.stringify(component));
    initComponent[Object.keys(component)[0]].properties = {};
    initComponent[Object.keys(component)[0]].required = [];
    properties.forEach((property) => {
        Object.assign(initComponent[Object.keys(component)[0]].properties, property);
        initComponent[Object.keys(component)[0]].required.push(Object.keys(property)[0]);
    });
    return initComponent;
};


const initPromoPanel = init(promoPanel, [promoPanelBackgroundColor]);
const initBuyButton = init(buyButton, [buyButtonBackgroundColor]);
const initHeader = init(header, [headerBackgroundColor]);
const initSidebar = init(sidebar, [sidebarBackgroundColor]);
const initHorizontalMenu = init(horizontalMenu, [horizontalMenuBackgroundColor]);
const initVerticalMenu = init(verticalMenu, [verticalMenuBackgroundColor]);
const initCatalogItem = init(catalogItem, [
    catalogItemBackgroundColor,
    catalogItemStateAvailable,
    catalogItemStateClarify,
    catalogItemStateOrder,
]);
const initFooter = init(footer, [footerBackgroundColor]);


const properties = Object.assign(
    {},
    basic,
    initPromoPanel,
    initBuyButton,
    initHeader,
    initSidebar,
    initHorizontalMenu,
    initVerticalMenu,
    initCatalogItem,
    initFooter,
);
const required = Object.keys(properties);


export default {
    type: 'object',
    description: 'Required parameters for design settings generation',
    additionalProperties: false,
    required,
    properties,
};
