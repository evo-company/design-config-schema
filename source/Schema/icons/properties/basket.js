import definitions from 'Schema/definitions/index';


const NAME = 'basket';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка корзины в панели меню',
    }, definitions.file)
};
