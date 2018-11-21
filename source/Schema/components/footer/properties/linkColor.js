import definitions from 'Schema/definitions';


const propertyName = 'linkColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Color of the links inside footer',
    }, definitions.color)
};
