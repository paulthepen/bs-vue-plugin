let elementData = {};

export const setElementData = (key, data) => {
    if (typeof data == 'object') {
        elementData[key] = data;
    } else {
        if (typeof config !== "undefined") {
            elementData[key] = config[data];
        } else {
            elementData[key] = {};
        }
    }
} 

export const getElementData = (key) => {
    if (elementData[key] !== undefined) {
        return elementData[key];
    } else {
        return {};
    }
}