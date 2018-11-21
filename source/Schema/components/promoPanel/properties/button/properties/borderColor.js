import definitions from 'Schema/definitions';


const NAME = 'borderColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Border color of the promo panel button',
    }, definitions.color)
};
