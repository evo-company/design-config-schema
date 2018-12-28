import React from 'react';
import { SketchPicker } from 'react-color';
import tc from 'tinycolor';
import css from './styles.sss';


const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;
const COLOR_PICKER_WIDTH = 400;


function getColor(color) {
    if (!color) return null;
    const tColor = color.rgb ? tc(color.rgb) : tc(color);
    if (!tColor.isValid()) return null;
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
        this.state = { displayColorPicker: false };
        this.handleColorPreviewClick = this.handleColorPreviewClick.bind(this);
        this.handleColorPickerClose = this.handleColorPickerClose.bind(this);
        this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        const pickedColor = getColor(color);
        this.props.formContext.handleColorChange({
            [this.props.label]: pickedColor,
        });
    }

    handleInputChange(event) {
        this.props.formContext.handleColorChange({
            [this.props.label]: event.target.value || undefined,
        });
    }

    handleInputKeyDown(event) {
        if (event.type === 'blur' || event.keyCode === ENTER_KEY_CODE) {
            const color = getColor(this.props.value) || undefined;
            this.props.formContext.handleColorChange({
                [this.props.label]: color,
            });
        }
    }

    render() {
        const { id, value, required, readonly } = this.props;
        const color = getColor(value) || undefined;
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
                    id={id}
                    className='form-control d-inline-block w-auto align-middle'
                    type="text"
                    value={value || ''}
                    required={required}
                    readOnly={readonly}
                    autoComplete='off'
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputKeyDown}
                    onKeyDown={this.handleInputKeyDown}
                />
            </React.Fragment>
        );
    };
};


export { CustomColorWidget };
