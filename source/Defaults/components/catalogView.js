import { getColor } from 'tinycolor';


export function generateCatalogViewData({ basic, catalogItem }) {
    const viewButton = {
        icon: {
            file: '',
            color: getColor(catalogItem.backgroundColor, catalogItem.backgroundColor, 15),
            activeColor: basic.themeSecondaryColor,
        }
    };
    return { list: viewButton, gallery: viewButton, large: viewButton };
};
