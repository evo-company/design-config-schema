import definitions from 'Schema/definitions/index';


const NAME = 'back';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка на кнопке "назад"',
    }, definitions.file)
};
