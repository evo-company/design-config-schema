import definitions from 'Schema/definitions';


const propertyName = 'fontFamily';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Basic font-family of the desing',
    }, definitions.font)
};
