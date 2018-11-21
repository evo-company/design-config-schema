export function getKeyValues(key, obj) {
    const result = {};
    if (obj.constructor !== Object) return result;
    Object.keys(obj).forEach((k) => {
        if (obj[k].constructor === Object && obj[k].hasOwnProperty(key)) {
            result[k] = obj[k][key];
        };
    });
    return result;
};


export function getRequiredPropertyKeys(propertyKeys, excludedPropertyKeys) {
    return propertyKeys.filter(
        propertyKey => !excludedPropertyKeys.includes(propertyKey)
    );
};
