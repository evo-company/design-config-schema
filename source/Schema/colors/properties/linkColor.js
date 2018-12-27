import definitions from 'Schema/definitions';


const propertyName = 'linkColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Цвет ссылок и иконок',
    }, definitions.color)
};
