/* a function getJSON which takes two parametres and constructs a valid url and stringified  params */
const getJSON = async (path, params = {}) => {
    const urlParams = new URLSearchParams(params);
    const url = `${path}?${urlParams.toString()}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        return data.data;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
};
