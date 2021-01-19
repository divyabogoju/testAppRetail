/**
 * Determine the correct promise to parse the payload, depending on the status of the response.
 * Spring Boot App returns HTML for non-200 responses.
 *
 * @param response, the response from fetch
 * @returns {Promise<*>}, the promise to parse the payload
 */

const resolvePayloadFromPromise = (response) => {
    // Remember -- response.json and response.text only return a PROMISE to parse the response.
    return response.ok ? response.json() : response.text();
};


export const handleResponse = async (response, resolvePayload = resolvePayloadFromPromise) => {
    return {
        status: response.status,
        // By awaiting the promise here, we obtain the actual payload.
        payload: await resolvePayload(response)
    };
};

/**
 * Calls fetch, providing reasonable defaults to options.
 *
 * @param url, the address you wish to call, including query parameters
 * @param options, will add-to/overwrite the default fetch options
 * @returns {Promise<Response>}, the response from fetch
 */
export const baseFetch = (url, options = {}) => {
    const defaultOptions = {
        headers: {
            'Accept': 'application/json',
        }
    };
    const mergedOptions = { ...defaultOptions, ...options };
    return fetch(url, mergedOptions);
};