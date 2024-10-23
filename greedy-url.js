// Function to extract all URLs from the dataset
function getURL(dataSet) {
    // Regular expression to match URLs (basic pattern)
    const urlRegex = /https?:\/\/[^\s]+/g;
    return dataSet.match(urlRegex) || [];
  }
  
  // Function to extract URLs with at least 3 query parameters (greedy)
  function greedyQuery(dataSet) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = dataSet.match(urlRegex) || [];
  
    return urls.filter(url => {
      // Count the number of query parameters in the URL (based on "&")
      const queryParams = (url.split('?')[1] || '').split('&');
      return queryParams.length >= 3 && queryParams[0] !== '';
    });
  }
  
  // Function to extract URLs with 2 to 3 query parameters (not so greedy)
  function notSoGreedy(dataSet) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = dataSet.match(urlRegex) || [];
  
    return urls.filter(url => {
      // Count the number of query parameters in the URL (based on "&")
      const queryParams = (url.split('?')[1] || '').split('&');
      const paramCount = queryParams.length;
      return paramCount >= 2 && paramCount <= 3 && queryParams[0] !== '';
    });
  }
  