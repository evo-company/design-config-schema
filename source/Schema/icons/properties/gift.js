import definitions from 'Schema/definitions/index';


const NAME = 'gift';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка подарка, которая показывается, если при покупке товара предоставляется подарок',
    }, definitions.file)
};
