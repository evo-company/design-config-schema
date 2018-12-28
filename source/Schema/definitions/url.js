export default {
    type: 'string',
    format: 'uri',
    pattern: '^(https?|wss?|ftp)://',
    ui: {
        'ui:widget': 'CustomTextWidget',
        'ui:help': 'External resource URL',
        'ui:placeholder': 'https://',
    },
};
