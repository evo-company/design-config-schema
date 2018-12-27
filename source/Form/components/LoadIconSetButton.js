import React from 'react';
import schema from 'Schema';
import { processFiles } from './widgets/CustomFileWidget/utils';


const ICON_LIST = Object.keys(schema.properties.icons.properties);


class LoadIconSetButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.inputElement.click();
    }

    handleChange(event) {
        const { onLoad } = this.props;
        processFiles(event.target.files).then(filesContent => {
            if (filesContent.length > 0) {
                const values = filesContent.reduce((obj, item) => {
                    if (!Boolean(item.svg) || !ICON_LIST.includes(item.name)) return obj;
                    obj[item.name] = item.svg;
                    return obj;
                }, {});
                onLoad(values);
            }
        });
        event.target.value = '';
    }

    render() {
        const { children, className } = this.props;
        return [
            <button
                key='load-icon-set-button'
                type='button'
                className={className}
                onClick={this.handleClick}
            >{children}</button>,
            <input
                key='load-icon-set-input'
                type='file'
                accept='.svg'
                style={{ display: 'none' }}
                onChange={this.handleChange}
                ref={input => this.inputElement = input}
                multiple
            />
        ]
    }
};


export { LoadIconSetButton };
