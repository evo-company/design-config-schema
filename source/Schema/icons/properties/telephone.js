import definitions from 'Schema/definitions/index';


const NAME = 'telephone';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка телефона в панели меню',
    }, definitions.file)
};
