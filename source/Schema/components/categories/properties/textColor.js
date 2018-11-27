import definitions from 'Schema/definitions';


const NAME = 'textColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Text color of the mobile panel with "product list", "sales" and "new products" links',
    }, definitions.color)
};
