import definitions from 'Schema/definitions';


const propertyName = 'textColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Text color of the sidebar title',
    }, definitions.color)
};
