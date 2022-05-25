let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

let sInput = input.sort(function (a, b) { return a - b });

let endArray = [];

let storeArray = [];

sInput.forEach(function (value, i) {
    if (value === sInput[i + 1]) {
        storeArray.push(value);

    } else if (value === sInput[i - 1]) {
        storeArray.push(value);
        //means this cycle ended, since storeArray is an array, it saves as that while pushed to endArray
        endArray.push(storeArray);
        storeArray = [];
    } else {
        endArray.push(value);
    };
});

console.log("last step", endArray);
