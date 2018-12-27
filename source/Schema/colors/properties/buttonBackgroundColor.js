import definitions from 'Schema/definitions';


const propertyName = 'buttonBackgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон кнопок',
    }, definitions.color)
};
