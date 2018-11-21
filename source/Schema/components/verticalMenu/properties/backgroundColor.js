import definitions from 'Schema/definitions';


const NAME = 'backgroundColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Vertical menu background color',
    }, definitions.color)
};
