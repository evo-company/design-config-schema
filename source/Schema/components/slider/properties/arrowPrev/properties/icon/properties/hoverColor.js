import definitions from 'Schema/definitions/index';


const NAME = 'hoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'SVG icon hover color of the "previous" arrow',
    }, definitions.color)
};
