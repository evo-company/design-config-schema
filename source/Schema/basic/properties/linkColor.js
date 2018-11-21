import definitions from 'Schema/definitions';


const propertyName = 'linkColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Basic link color of the design',
    }, definitions.color)
};
