function removeFromArray(arr, itm2rmv) {
  let finalArr = arr.reduce((acc, cv) => {
    if (cv !== itm2rmv) {
      acc.push(cv);
    }
    return acc;
  }, []);
  return finalArr;
}

removeFromArray([1, 2, 3, 4], 3);
