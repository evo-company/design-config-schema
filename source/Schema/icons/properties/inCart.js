import definitions from 'Schema/definitions/index';


const NAME = 'inCart';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка на кнопке "купить", если товар уже в корзине',
    }, definitions.file)
};
