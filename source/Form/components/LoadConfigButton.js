import React from 'react';


function processFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (event) => resolve(event.target.result);
        reader.readAsText(file);
    });
};


class LoadButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        const { shouldLoad } = this.props;
        if (typeof shouldLoad === 'function') {
            if (shouldLoad()) this.inputElement.click();
        } else if (shouldLoad === null || shouldLoad === 'undefined' || shouldLoad) {
            this.inputElement.click();
        }
    }

    handleChange(event) {
        processFile(event.target.files[0]).then(this.props.onLoad);
        event.target.value = null;
    }

    render() {
        const { children, className } = this.props;
        return [
            <button
                key='load-config-button'
                type='button'
                className={className}
                onClick={this.handleClick}
            >{children}</button>,
            <input
                key='load-config-input'
                type='file'
                accept='.json'
                style={{ display: 'none' }}
                onChange={this.handleChange}
                ref={input => this.inputElement = input}
            />
        ]
    }
};


export { LoadButton };
