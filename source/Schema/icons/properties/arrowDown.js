import definitions from 'Schema/definitions/index';


const NAME = 'arrowDown';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Стрелка на ссылках: "сортировать по", "показать еще" и т.п.',
    }, definitions.file)
};
