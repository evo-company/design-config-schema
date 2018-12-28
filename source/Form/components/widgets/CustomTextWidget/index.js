import React from 'react';


class CustomTextWidget extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.formContext.handleFontChange({
            [this.props.label]: event.target.value || undefined,
        });
    }

    render() {
        const { id, readonly, disabled, autofocus, required, value } = this.props;
        return (
            <input
                id={id}
                type='text'
                className='form-control'
                onChange={this.handleChange}
                value={value || ''}
                autoFocus={autofocus}
                disabled={readonly || disabled}
                required={required}
                autoComplete='off'
            />
        );
    }
};


export { CustomTextWidget };
