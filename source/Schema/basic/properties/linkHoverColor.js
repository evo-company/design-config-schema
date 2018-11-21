import definitions from 'Schema/definitions';


const propertyName = 'linkHoverColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Basic link hover color of the design',
    }, definitions.color)
};
