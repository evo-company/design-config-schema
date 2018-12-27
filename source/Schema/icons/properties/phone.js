import definitions from 'Schema/definitions/index';


const NAME = 'phone';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка на кнопке "позвонить"',
    }, definitions.file)
};
