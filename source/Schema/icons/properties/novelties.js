import definitions from 'Schema/definitions/index';


const NAME = 'novelties';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка "новинки" для перехода к списку новых продуктов',
    }, definitions.file)
};
