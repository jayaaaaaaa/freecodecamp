const destroyer = (arr, ...remove) => arr.filter(e => !remove.includes(e));

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// returns [1, 1]
