import definitions from 'Schema/definitions';


const NAME = 'textColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: '"Buy" button text color',
    }, definitions.color)
};
