import definitions from 'Schema/definitions';


const propertyName = 'labelBackgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: 'Фон меток на продукте: "новинка", "хит продаж", "скидка" и т.п.',
    }, definitions.color)
};
