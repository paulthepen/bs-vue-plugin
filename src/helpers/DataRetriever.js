let elementData = {};

//sets the data from either a config object declared on the parent site or a provided object
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

//translates a property into a hyphenated url slug
export const createUrlSlug = (name) => {
    return name.toLowerCase().replace(' ', '-');
}