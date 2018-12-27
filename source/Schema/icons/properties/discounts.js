import definitions from 'Schema/definitions/index';


const NAME = 'discounts';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка "скидки" для перехода к списку акционных продуктов',
    }, definitions.file)
};
