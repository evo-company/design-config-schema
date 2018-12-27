import definitions from 'Schema/definitions';


const propertyName = 'menuBackgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон горизонтального меню сайта',
    }, definitions.color)
};
