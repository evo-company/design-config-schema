import definitions from 'Schema/definitions';


const NAME = 'backgroundColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Navigation link background color',
    }, definitions.color)
};
