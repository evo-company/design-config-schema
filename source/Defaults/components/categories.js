export function generateCategoriesData({ basic }) {
    const textColor = basic.textColor;
    const viewButton = {
        icon: {
            file: '',
            color: basic.themePrimaryColor,
        }
    };
    return {
        textColor,
        products: viewButton,
        newProducts: viewButton,
        sales: viewButton
    };
};
