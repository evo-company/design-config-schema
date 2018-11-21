import definitions from 'Schema/definitions';


const propertyName = 'linkHoverColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Hover color of the links inside sidebar',
    }, definitions.color)
};
