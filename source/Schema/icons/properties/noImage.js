import definitions from 'Schema/definitions/index';


const NAME = 'noImage';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка для отображения вместо картинки на продукте (если у продукта нет картинки)',
    }, definitions.file)
};
