import definitions from 'Schema/definitions';


const propertyName = 'externalFontFamily';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'URL for Google Fonts (see https://fonts.google.com/)',
    }, definitions.url)
};
