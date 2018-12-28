import definitions from 'Schema/definitions';


const propertyName = 'fontFamily';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Семейство шрифтов используемых по умолчанию на сайте',
    }, definitions.font)
};