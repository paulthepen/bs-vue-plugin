import axios from 'axios';

let apiBase = null;
export let apiResponse = null;

export const initializeApi = url => {
    if (!url || url != "none") {
        apiBase = url;
    }
}

const reportError = (msg) => {
    return {status: {error: msg}};
}

export const callUnitSearch = (criteria) => {
    return callApi('UnitSearch.php', criteria);
}

export const callUnitDetails = (id) => {
    return callApi('UnitDetails.php', {id: id});
}

const callApi = (path, data) => {
    if (!apiBase) {
        return reportError("Api not initialized");
    }
    return axios.post(apiBase + path, data, {
        headers: {
            "content-type": "multipart/form-data",
        }
    });
}