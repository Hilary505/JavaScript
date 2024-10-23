function groupPrice(text) {
    const priceRegex = /(\d+(\.\d+)?)(\s*\$|\s*€|\s*£)?/g;
    const matches = text.matchAll(priceRegex);
    const prices = [];
  
    for (const match of matches) {
      prices.push([match[0]]);
    }
  
    return prices;
  }
  