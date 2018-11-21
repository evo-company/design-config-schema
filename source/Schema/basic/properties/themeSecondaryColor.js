import definitions from 'Schema/definitions';


const propertyName = 'themeSecondaryColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Secondary theme color of the design',
    }, definitions.color)
};
