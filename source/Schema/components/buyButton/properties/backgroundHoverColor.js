import definitions from 'Schema/definitions';


const NAME = 'backgroundHoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: '"Buy" button background hover color',
    }, definitions.color)
};
