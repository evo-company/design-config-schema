import definitions from 'Schema/definitions';


const propertyName = 'menuColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Цвет текста/иконок горизонтального меню сайта',
    }, definitions.color)
};
