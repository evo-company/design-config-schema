import { generatePromoPanelData } from './components/promoPanel';
import { generateBuyButtonData } from './components/buyButton';
import { generateHeaderData } from './components/header';
import { generateSidebarData } from './components/sidebar';
import { generateHorizontalMenuData } from './components/horizontalMenu';
import { generateVerticalMenuData } from './components/verticalMenu';
import { generateHamburgerMenuData } from './components/hamburgerMenu';
import { generateCatalogItemData } from './components/catalogItem';
import { generateFooterData } from './components/footer';
import { generateSliderData } from './components/slider';
import { generateTitleData } from './components/title';
import { generateNavigationLinkData } from './components/navigationLink';
import { generateGroupItemData } from './components/groupItem';
import { generatePortfolioItemData } from './components/portfolioItem';
import { generateUserContentData } from './components/userContent';
import { generateSocialNetworkData } from './components/socialNetwork';


export default function(initFormData) {
    const { basic } = initFormData;
    return {
        basic: {
            externalFontFamily: basic.externalFontFamily,
            fontFamily: basic.fontFamily,
            themePrimaryColor: basic.themePrimaryColor,
            themeSecondaryColor: basic.themeSecondaryColor,
            backgroundColor: basic.backgroundColor,
            textColor: basic.textColor,
            linkColor: basic.linkColor,
            linkHoverColor: basic.linkHoverColor,
        },
        promoPanel: generatePromoPanelData(initFormData),
        title: generateTitleData(initFormData),
        buyButton: generateBuyButtonData(initFormData),
        header: generateHeaderData(initFormData),
        sidebar: generateSidebarData(initFormData),
        horizontalMenu: generateHorizontalMenuData(initFormData),
        verticalMenu: generateVerticalMenuData(initFormData),
        hamburgerMenu: generateHamburgerMenuData(initFormData),
        catalogItem: generateCatalogItemData(initFormData),
        footer: generateFooterData(initFormData),
        slider: generateSliderData(initFormData),
        navigationLink: generateNavigationLinkData(initFormData),
        groupItem: generateGroupItemData(initFormData),
        portfolioItem: generatePortfolioItemData(initFormData),
        userContent: generateUserContentData(initFormData),
        socialNetwork: generateSocialNetworkData(),
    };
};


export const initFormData = {
    basic: {
        externalFontFamily: 'https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i&amp;subset=cyrillic',
        fontFamily: 'Ubuntu, sans-serif',
        themePrimaryColor: '#35A4A9',
        themeSecondaryColor: '#3882BF',
        backgroundColor: '#DFDCE3',
        textColor: '#333',
        linkColor: '#3882BF',
        linkHoverColor: '#2F619D',
    },
    promoPanel: {
        backgroundColor: '#3882BF',
    },
    buyButton: {
        backgroundColor: '#5E4DC7',
    },
    header: {
        backgroundColor: '#F2F1F3',
    },
    sidebar: {
        backgroundColor: '#FFF',
    },
    horizontalMenu: {
        backgroundColor: '#FFF',
    },
    verticalMenu: {
        backgroundColor: '#FFF',
    },
    catalogItem: {
        backgroundColor: '#FFF',
        stateAvailable: {
            textColor: '#009A00',
        },
        stateOrder: {
            textColor: '#CC0A91',
        },
        stateClarify: {
            textColor: '#C10000',
        },
    },
    footer: {
        backgroundColor: '#333',
    },
};
