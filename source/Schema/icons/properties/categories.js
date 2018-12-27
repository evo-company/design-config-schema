import definitions from 'Schema/definitions/index';


const NAME = 'categories';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка "категории" для перехода к списку продуктов',
    }, definitions.file)
};
