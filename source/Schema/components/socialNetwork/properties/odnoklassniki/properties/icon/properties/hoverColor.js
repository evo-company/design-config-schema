import definitions from 'Schema/definitions/index';


const NAME = 'hoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: '"odnoklassniki" icon hover color',
    }, definitions.color)
};
