import definitions from 'Schema/definitions';


const NAME = 'backgroundHoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Background hover color of the "previous" arrow',
    }, definitions.color)
};
