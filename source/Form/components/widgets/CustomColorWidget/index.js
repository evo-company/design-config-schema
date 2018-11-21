import React from 'react';
import { SketchPicker } from 'react-color';
import tc from 'tinycolor';
import css from './styles.sss';


const ESC_KEY_CODE = 27;
const COLOR_WHITE = '#fff';
const COLOR_PICKER_WIDTH = 400;


function getColorData(color) {
    if (!color) return { backgroudColor: null, textColor: null };
    const tColor = color.rgb ? tc(color.rgb) : tc(color);
    return {
        backgroudColor: tColor.toText(),
        textColor: tColor.toHsl().l < 0.7 ? COLOR_WHITE : null,
    };
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
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
        document.body.style.overflow = null;
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    handleClick() {
        const { displayColorPicker } = this.state;
        document.body.style.overflow = !displayColorPicker ? 'hidden' : null;
        this.setState({ displayColorPicker: !displayColorPicker });
    }

    handleClose() {
        document.body.style.overflow = null;
        this.setState({ displayColorPicker: false });
    }

    handleKeyDown(event) {
        const shouldCloseColorPicker = (
            this.state.displayColorPicker &&
            event.keyCode === ESC_KEY_CODE
        );
        if (shouldCloseColorPicker) this.handleClose();
    }

    handleChange(color) {
        this.props.onChange(getColorData(color).backgroudColor || '');
    }

    render() {
        const colorData = getColorData(this.props.value);
        const inputBackgroundColor = colorData.backgroudColor;
        const inputTextColor = colorData.textColor;
        return [
            <input
                id={this.props.id}
                key={this.props.id}
                type='text'
                className={`form-control ${css['form-control']}`}
                value={inputBackgroundColor || ''}
                required={this.props.required}
                readOnly={this.props.readonly}
                onClick={this.handleClick}
                style={{
                    backgroundColor: inputBackgroundColor,
                    color: inputTextColor,
                }}
                autoComplete='off'
            />,
            <ColorPicker
                enable={this.state.displayColorPicker}
                color={inputBackgroundColor || COLOR_WHITE}
                onChange={this.handleChange}
                onClose={this.handleClose}
                key={`color-picker-overlay-${this.props.id}`}
            />
        ];
    };
};


export { CustomColorWidget };
