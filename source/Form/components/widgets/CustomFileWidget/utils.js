// const HTML_COMMENT_REGEX = /<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g;
const HTML_COMMENT_REGEX = /<!--[\s\S]*?-->/g;
const SVG_REGEX = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;


function isArguments(object) {
  return Object.prototype.toString.call(object) === '[object Arguments]';
};


function deepEquals(a, b, ca = [], cb = []) {
    // Partially extracted from node-deeper and adapted to exclude comparison
    // checks for functions.
    // https://github.com/othiym23/node-deeper
    if (a === b) {
        return true;
    } else if (typeof a === 'function' || typeof b === 'function') {
        // Assume all functions are equivalent
        // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
        return true;
    } else if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
    } else if (a === null || b === null) {
        return false;
    } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    } else if (a instanceof RegExp && b instanceof RegExp) {
        return (
            a.source === b.source &&
            a.global === b.global &&
            a.multiline === b.multiline &&
            a.lastIndex === b.lastIndex &&
            a.ignoreCase === b.ignoreCase
        );
    } else if (isArguments(a) || isArguments(b)) {
        if (!(isArguments(a) && isArguments(b))) return false;
        let slice = Array.prototype.slice;
        return deepEquals(slice.call(a), slice.call(b), ca, cb);
    } else if (a.constructor !== b.constructor) return false;

    let ka = Object.keys(a);
    let kb = Object.keys(b);
    // don't bother with stack acrobatics if there's nothing there
    if (ka.length === 0 && kb.length === 0) return true;
    if (ka.length !== kb.length) return false;

    let cal = ca.length;
    while (cal--) {
        if (ca[cal] === a) return cb[cal] === b;
    }
    ca.push(a);
    cb.push(b);

    ka.sort();
    kb.sort();
    for (var j = ka.length - 1; j >= 0; j--) {
        if (ka[j] !== kb[j]) return false;
    }

    let key;
    for (let k = ka.length - 1; k >= 0; k--) {
        key = ka[k];
        if (!deepEquals(a[key], b[key], ca, cb)) return false;
    }

    ca.pop();
    cb.pop();
    return true;
};


export function shouldRender(comp, nextProps, nextState) {
  const { props, state } = comp;
  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
};


function isBinary(buf) {
    const isBuf = Buffer.isBuffer(buf);
    for (let i = 0; i < 24; i++) {
        const charCode = isBuf ? buf[i] : buf.charCodeAt(i);
        if (charCode === 65533 || charCode <= 8) return true;
    }
    return false;
};


function isSVG(data) {
    return (
        Boolean(data) &&
        !isBinary(data) &&
        SVG_REGEX.test(data.toString().replace(HTML_COMMENT_REGEX, ''))
    );
};


function processFile(file) {
    const { name } = file;
    return new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.onerror = reject;
        reader.onload = (event) => {
            const data = event.target.result;
            if (isSVG(data)) return resolve({
                name: name.replace(/(\.svg)$/i, ''),
                svg: data,
            });
            alert('ERROR: Invalid file format!\nThere must be only an SVG file.')
            return resolve(null);
        };
        reader.readAsText(file);
    });
};


export function processFiles(files) {
    return Promise.all([].map.call(files, processFile));
};
