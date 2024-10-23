// queryServers function
const queryServers = (serverName, q) => {
    const primaryUrl = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;

    // Return the fastest response from either primary or backup
    return Promise.race([getJSON(primaryUrl), getJSON(backupUrl)]);
}

// gougleSearch function
 const gougleSearch = async(q) => {
    // Create a promise that rejects after 80ms
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('timeout')), 80);
    });

    try {
        // Start querying all servers concurrently
        const webQuery = queryServers('web', q);
        const imageQuery = queryServers('image', q);
        const videoQuery = queryServers('video', q);

        // Wait for all results or timeout, whichever happens first
        const results = await Promise.race([
            Promise.all([webQuery, imageQuery, videoQuery]),
            timeout
        ]);

        // Return the result object with server names as keys
        return {
            web: results[0],
            image: results[1],
            video: results[2],
        };
    } catch (error) {
        throw error; // Throw timeout error if occurred
    }
}
