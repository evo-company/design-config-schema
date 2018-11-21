import definitions from 'Schema/definitions';


const propertyName = 'themePrimaryColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Primary theme color of the design',
    }, definitions.color)
};
