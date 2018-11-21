import definitions from 'Schema/definitions';


const NAME = 'backgroundActiveColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Slider navigation background color of the active item',
    }, definitions.color)
};
