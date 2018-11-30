import tinycolor from 'tinycolor2';


function relativelyDesaturate(color, amount) {
    const hsla = color.toHsl();
    return tinycolor({
        h: hsla.h,
        s: hsla.s * (100 - amount),
        l: hsla.l,
        a: hsla.a,
    });
};


function relativelySaturate(color, amount) {
    const hsla = color.toHsl();
    return tinycolor({
        h: hsla.h,
        s: hsla.s * (100 + amount),
        l: hsla.l,
        a: hsla.a,
    });
};


function invert(color) {
    const rgba = color.toRgb();
    return tinycolor({
        r: 255 - rgba.r,
        g: 255 - rgba.g,
        b: 255 - rgba.b,
    });
};


tinycolor.prototype.dark = function() {
    return this.toHsl().l < 0.5;
};


tinycolor.prototype.light = function() {
    return this.toHsl().l >= 0.5;
};


tinycolor.prototype.relativelyDesaturate = function() {
    return this._applyModification(relativelyDesaturate, arguments);
};


tinycolor.prototype.relativelySaturate = function() {
    return this._applyModification(relativelySaturate, arguments);
};


tinycolor.prototype.invert = function() {
    return this._applyModification(invert, arguments);
};


tinycolor.prototype.toText = function() {
    const alpha = this.getAlpha();
    if (alpha === 0) return 'transparent';
    return alpha < 1 ? this.toRgbString() : this.toHexString();
};


export default tinycolor;


export function getTextColor(background, color) {
    return tinycolor.readability(background, color) < 8 ?
        tinycolor(color).invert().lighten(20).toText() :
        color;
};


export function getColor(background, color, amount) {
    const c = tinycolor(color);
    return tinycolor(background).dark() ?
        c.lighten(amount).toText() :
        c.darken(amount).toText();
};
