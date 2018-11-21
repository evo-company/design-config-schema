import definitions from 'Schema/definitions';


const NAME = 'fontFamily';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Font family of the sidebar title',
    }, definitions.font)
};
