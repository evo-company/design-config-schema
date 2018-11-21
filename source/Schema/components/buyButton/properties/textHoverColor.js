import definitions from 'Schema/definitions';


const NAME = 'textHoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: '"Buy" button text hover color',
    }, definitions.color)
};
