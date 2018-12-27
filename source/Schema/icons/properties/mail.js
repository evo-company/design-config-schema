import definitions from 'Schema/definitions/index';


const NAME = 'mail';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка на кнопке "написать"',
    }, definitions.file)
};
