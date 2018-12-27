import definitions from 'Schema/definitions';


const propertyName = 'siteBackgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон сайта',
    }, definitions.color)
};
