import definitions from 'Schema/definitions/index';


const NAME = 'arrowRight';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Стрелка на ссылках: "все новости", "все товары" и т.п.',
    }, definitions.file)
};
