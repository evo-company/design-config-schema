import definitions from 'Schema/definitions';


const propertyName = 'textColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Basic text color of the design',
    }, definitions.color)
};
