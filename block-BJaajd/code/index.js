let functions = {
  removeFromArray: (arr, itm2rmv) => {
    let finalArr = arr.reduce((acc, cv) => {
      if (cv !== itm2rmv) {
        acc.push(cv);
      }
      return acc;
    }, []);
    return finalArr;
  },
  forEach: (items, callback) => {
    const final = [];
    for (let index = 0; index < items.length; index++) {
      final.push(callback(items[index], index, items));
    }
  },
  map: (items, callback) => {
    const final = [];
    for (let index = 0; index < items.length; index++) {
      final.push(callback(items[index]));
    }
    return final;
  },
};

module.exports = functions;
