import definitions from 'Schema/definitions';


const propertyName = 'backgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Background color of the sidebar title',
    }, definitions.color)
};
