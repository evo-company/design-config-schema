import definitions from 'Schema/definitions/index';


const NAME = 'loadMore';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка на кнопке "подгрузить еще"',
    }, definitions.file)
};
