export function getKeyValues(key, obj) {
    const result = {};
    if (obj.constructor !== Object) return result;
    Object.keys(obj).forEach((k) => {
        if (obj[k].constructor === Object && obj[k].hasOwnProperty(key)) {
            result[k] = obj[k][key];
            delete obj[k][key];
        };
    });
    return result;
};
