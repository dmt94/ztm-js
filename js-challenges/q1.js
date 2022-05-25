let unorganizedArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

/*
make a function that organizes these into individual array 
that is ordered. 

For example answer(ArrayFromAbove) should return: 
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] 
*/

function organized(arr) {
  let duplicatesA = [];
  let nonDuplicatesA = [];
  let finalNonDuplicates = [];

  const toFindDuplicates = arry => arry.forEach((item, index) => {
    if (arr.indexOf(item) !== index) {
      duplicatesA.push(item);
    } else {
      nonDuplicatesA.push(item);
    }
  });

  toFindDuplicates(arr);

  for (let i = 0; i < nonDuplicatesA.length; i++) {
    if (duplicatesA.includes(nonDuplicatesA[i])) {
      duplicatesA.push(nonDuplicatesA[i]);
    } else {
      finalNonDuplicates.push(nonDuplicatesA[i]);
    }
  }
  
  duplicatesA.sort((a, b) => a - b);
  finalNonDuplicates.sort((a, b) => a - b);



  console.log(duplicatesA);
  console.log(finalNonDuplicates);


  
  // let newA =  arr.sort(function(a, b) {
  //   return a - b;
  // });
}

organized(unorganizedArray);