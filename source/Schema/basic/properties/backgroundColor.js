import definitions from 'Schema/definitions';


const propertyName = 'backgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Basic background color of the design',
    }, definitions.color)
};
