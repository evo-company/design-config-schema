import React from 'react';
import { SketchPicker } from 'react-color';
import tc from 'tinycolor';
import css from './styles.sss';


const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;
const COLOR_PICKER_WIDTH = 400;


function getColor(color, defaultColor = null) {
    if (!color) return null;
    const tColor = color.rgb ? tc(color.rgb) : tc(color);
    if (!tColor.isValid()) return defaultColor;
    return tColor.toText();
};


const ColorPicker = ({ enable, color, onChange, onClose }) => {
    if (!enable) return null;
    return (
        <div className={css.overlay}>
            <div className={css['overlay-background-layer']} onClick={onClose}/>
            <div className={css['overlay-body']}>
                <SketchPicker
                    color={color}
                    onChangeComplete={onChange}
                    width={COLOR_PICKER_WIDTH}
                />
            </div>
        </div>
    );
};


class CustomColorWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayColorPicker: false, inputValue: '' };
        this.input = null;
        this.handleColorPreviewClick = this.handleColorPreviewClick.bind(this);
        this.handleColorPickerClose = this.handleColorPickerClose.bind(this);
        this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
        document.body.style.overflow = null;
        document.body.style.width = null;
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    handleColorPreviewClick() {
        document.body.style.width = `${document.body.clientWidth}px`;
        document.body.style.overflow = 'hidden';
        this.setState({ displayColorPicker: true });
    }

    handleColorPickerClose() {
        document.body.style.overflow = null;
        document.body.style.width = null;
        this.setState({ displayColorPicker: false });
    }

    handleKeyDown(event) {
        const shouldCloseColorPicker = (
            this.state.displayColorPicker &&
            event.keyCode === ESC_KEY_CODE
        );
        if (shouldCloseColorPicker) this.handleColorPickerClose();
    }

    handleColorPickerChange(color) {
        const pickedColor = getColor(color) || '';
        this.props.formContext.handleColorChange({
            [this.props.label]: pickedColor,
        });
        this.setState({ inputValue: '' });
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value })
    }

    handleInputFocus() {
        this.setState({ inputValue: this.props.value });
    }

    handleInputKeyDown(event) {
        if (event.type === 'blur' || event.keyCode === ENTER_KEY_CODE) {
            const color = getColor(this.state.inputValue, this.props.value) || '';
            this.props.formContext.handleColorChange({
                [this.props.label]: color,
            });
            this.setState({ inputValue: '' });
        }
    }

    render() {
        const color = this.props.value;
        const inputValue =  this.state.inputValue || color;
        const previewClassName = [
            'd-inline-block', 'align-middle', 'border', 'border-secondary',
            'rounded', 'mr-2', css['color-preview']
        ].join(' ');
        return (
            <React.Fragment>
                <ColorPicker
                    enable={this.state.displayColorPicker}
                    color={color}
                    onChange={this.handleColorPickerChange}
                    onClose={this.handleColorPickerClose}
                />
                <div className={previewClassName}>
                    <span
                        className={css['color-preview-value']}
                        style={{ backgroundColor: color }}
                        onClick={this.handleColorPreviewClick}
                    />
                </div>
                <input
                    id={this.props.id}
                    className='form-control d-inline-block w-auto align-middle'
                    type="text"
                    value={inputValue || ''}
                    required={this.props.required}
                    readOnly={this.props.readonly}
                    autoComplete='off'
                    onFocus={this.handleInputFocus}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputKeyDown}
                    onKeyDown={this.handleInputKeyDown}
                />
            </React.Fragment>
        );
    };
};


export { CustomColorWidget };
