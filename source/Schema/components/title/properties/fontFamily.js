import definitions from 'Schema/definitions';


const NAME = 'fontFamily';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Title font family',
    }, definitions.font)
};
