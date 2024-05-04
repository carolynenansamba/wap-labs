const getNewArray = function(strArray) {
    let newArray = [];

    for (let i = 0; i < strArray.length; i++) {
        
        if (strArray[i].length >= 5 && strArray[i].toLowerCase().includes('a')) {
           
            newArray.push(strArray[i]);
        }
    }


    return newArray;
};


const strings = ["apple", "banana", "pear", "orange", "grapefruit"];
const resultArray = getNewArray(strings);
console.log(resultArray); // Output: ["apple", "banana", "orange", "grapefruit"]
