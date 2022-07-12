let elementData = {};

export const setElementData = (key, data) => {
    elementData[key] = data;
} 

export const getElementData = (key) => {
    if (elementData[key] !== undefined) {
        return elementData[key];
    } else {
        return {};
    }
}