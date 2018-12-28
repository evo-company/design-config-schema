import definitions from 'Schema/definitions';


const propertyName = 'promoColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон текста/иконок на промопанели',
    }, definitions.color)
};
