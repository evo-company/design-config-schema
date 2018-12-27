import definitions from 'Schema/definitions';


const propertyName = 'headerBackgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон верхней части сайта - "шапки"',
    }, definitions.color)
};
