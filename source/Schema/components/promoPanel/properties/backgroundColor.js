import definitions from 'Schema/definitions';


const NAME = 'backgroundColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Promo panel background color',
    }, definitions.color)
};
