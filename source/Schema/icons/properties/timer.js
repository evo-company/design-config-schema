import definitions from 'Schema/definitions/index';


const NAME = 'timer';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Иконка секундомера, которая показывается, если активировано приложение "акция с таймером"',
    }, definitions.file)
};
