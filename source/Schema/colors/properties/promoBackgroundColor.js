import definitions from 'Schema/definitions';


const propertyName = 'promoBackgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон промопанели',
    }, definitions.color)
};
