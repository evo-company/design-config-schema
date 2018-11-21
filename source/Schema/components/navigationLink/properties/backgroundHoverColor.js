import definitions from 'Schema/definitions';


const NAME = 'backgroundHoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Navigation link background hover color',
    }, definitions.color)
};
