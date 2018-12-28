import definitions from 'Schema/definitions';


const propertyName = 'googleFontUrl';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Ссылка на шрифты "Google Fonts" (см. https://fonts.google.com/)',
    }, definitions.url)
};
