export default {
    type: 'string',
    pattern: '^#([A-Fa-f0-9]{3}){1,2}$|^rgb\\(\\s*\\d{1,3},\\s*\\d{1,3},\\s*\\d{1,3}\\s*\\)$|^rgba\\(\\s*\\d{1,3},\\s*\\d{1,3},\\s*\\d{1,3},\\s*(0|1|(0?.\\d+))\\s*\\)$|transparent',
    ui: {
        'ui:widget': 'CustomColorWidget',
        'ui:help': 'Supported formats: hex, rgb, rgba',
    }
};
