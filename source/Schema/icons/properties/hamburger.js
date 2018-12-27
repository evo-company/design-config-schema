import definitions from 'Schema/definitions/index';


const NAME = 'hamburger';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка кнопки вызова меню',
    }, definitions.file)
};
