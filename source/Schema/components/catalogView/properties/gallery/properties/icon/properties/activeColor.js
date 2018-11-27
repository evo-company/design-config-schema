import definitions from 'Schema/definitions/index';


const NAME = 'activeColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: '"Gallery" view type icon active color',
    }, definitions.color)
};
