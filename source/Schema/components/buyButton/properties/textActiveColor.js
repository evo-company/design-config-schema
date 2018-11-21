import definitions from 'Schema/definitions';


const NAME = 'textActiveColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Text color for "buy" button of the product that is in cart',
    }, definitions.color)
};
