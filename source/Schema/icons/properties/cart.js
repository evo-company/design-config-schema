import definitions from 'Schema/definitions/index';


const NAME = 'cart';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка корзины на кнопке "купить"',
    }, definitions.file)
};
