import React from 'react';
import { Buffer } from 'buffer';
import { shouldRender, processFiles } from './utils';
import css from './styles.sss';


function filesPreview(value) {
    let values = [];
    if (Array.isArray(value)) {
        if (!value.length) return <IconPreviewTemplate/>
        values = value;
    } else {
        if (!value) return <IconPreviewTemplate/>;
        values = [value];
    }
    if (!values.length) return <IconPreviewTemplate/>;
    return values.map((svg, i) => <IconPreviewTemplate key={i} content={svg}/>);
};


const IconPreviewTemplate = ({ content }) => {
    const className = [
        'd-inline-block', 'align-middle', 'border', 'border-secondary',
        'rounded', 'p-1', 'mr-2', css['svg-preview']
    ].join(' ');
    if (content) {
        return (
            <div
                className={className}
                dangerouslySetInnerHTML={{__html: content || null}}
            />
        );
    }
    return (
        <div className={className}>
            <i className={css['icon-camera']}/>
        </div>
    );
};


class CustomFileWidget extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shouldRender(this, nextProps, nextState);
    }

    handleChange(event) {
        const { onChange, multiple } = this.props;
        processFiles(event.target.files).then(filesContent => {
            const values = filesContent.reduce((list, item) => {
                if (Boolean(item.svg)) list.push(item.svg);
                return list;
            }, []);
            if (values.length > 0) onChange(multiple ? values : values[0]);
        });
        event.target.value = '';
    }

    handleReset() {
        this.props.onChange('');
    }

    handleClick() {
        this.inputElement.click();
    }

    render() {
        const { multiple, id, readonly, disabled, autofocus, required, value } = this.props;
        return (
            <div>
                {filesPreview(value)}
                <input
                    id={id}
                    type='file'
                    onChange={this.handleChange}
                    value=''
                    autoFocus={autofocus}
                    multiple={multiple}
                    disabled={readonly || disabled}
                    required={required}
                    accept='.svg'
                    style={{ display: 'none' }}
                    ref={input => this.inputElement = input}
                />
                <button
                    type='button'
                    className='btn btn-sm btn-info'
                    onClick={this.handleClick}
                >Open file</button>
                <button
                    type='button'
                    className='btn btn-sm btn-outline-primary ml-2'
                    onClick={this.handleReset}
                >Reset</button>
            </div>
        );
    }
};


export { CustomFileWidget };
