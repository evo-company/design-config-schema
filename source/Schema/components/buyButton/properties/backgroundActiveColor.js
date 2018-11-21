import definitions from 'Schema/definitions';


const NAME = 'backgroundActiveColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Background color for "buy" button of the product that is in cart',
    }, definitions.color)
};
