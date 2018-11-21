import definitions from 'Schema/definitions';


const NAME = 'textHoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Navigation link hover color',
    }, definitions.color)
};
