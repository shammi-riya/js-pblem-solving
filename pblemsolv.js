





// duplicate remove
const arrty = [1, 4, 2, 6, 5, 7, 7]

// const duplicateArry = arrty.filter((arr,i)=>arrty.indexOf(arr)== i)
// console.log(duplicateArry);


const duplicateArry2 = [...new Set(arrty)]
// console.log(duplicateArry2);

// marge arry


function mergeSortedArray(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const arr1 = [1, 4, 3, 7, 0];
const arr2 = [9, 5];
const merged = mergeSortedArray(arr1, arr2);
//   console.log(merged); // Output: [0, 1, 3, 4, 5, 7, 9]






function swapNumbers(a, b) {
  console.log('afterSwap a=', a, 'b=', b);
  a = a + b;
  console.log(a, 'a');
  b = a - b;
  console.log(b, 'b');
  a = a - b;
  console.log(a, 'a');

  console.log('beforeSwap a=', a, 'b=', b);
}


swapNumbers(5, 3);




function tempSwap(e, f) {
  // console.log(e,f);
  let temp;


  temp = e;

  e = f;
  f = temp;

  // console.log(e,f);
}

// tempSwap(5,6)




// string reverse 

function stringReverse(str) {


  return str.split("").reverse().join();
}

console.log(stringReverse('hi how are you'));


// function stringReverse(str) {

// let reversed  = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
// return reversed ;

// }

// console.log(stringReverse('hi how are you'));



// function reverseString(str){


//     var rtnStr = [];
//   if(!str || typeof str != 'string' || str.length < 2 ) return str;

//   for(var i = str.length-1; i>=0; i--){
//     rtnStr.push(str[i]);
//   }
//   return rtnStr.join('');
// }

// console.log(reverseString('hello i am Riya'));



function reverse(str) {
  return str.split(' ').reverse().join()

}
// console.log(reverse('hello gd boy'));

// function getRandom(num) {
//     return Math.floor(Math.random()*num)
// }

// console.log(getRandom(10));

function countZero(n) {
  var count = 0;
  while (n > 0) {
    count += Math.floor(n / 10);
    n = n / 10;
  }
  return count;
}

//  console.log(countZero(90608));



//  1 to 10 prime number


function isPrime(number) {

  if (number <= 1) {
    return false
  }

  for (let i = 2; i < number; i++) {
    if (number % 2 == 0) {
      return false
    }

  }
  return true;

}

for (let i = 2; i <= 10; i++) {
  if (isPrime(i)) {
    // console.log(i);
  }

}




// sum in array 

function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i];
    
  }
return sum;

}

const number = [2,2,2,6]
// console.log(getSum(number));



// find largest number 

function largestNumber(arry) {
  let largest = arry[0];

  for (let i = 0; i < arry.length; i++) {
    if(arry[i] >largest){
      largest = arry[i]
    }
    
  }
  return largest;
  
}

// console.log(largestNumber([5,7,67,4,8]));




// fibonnaci 

function getfibonnaci(n) {
  let sequnce = [0,1]

  for (let i = 2; i < n; i++) {
    const nextNumber = sequnce[i-1] + sequnce[i-2]
    sequnce.push(nextNumber)
    
  }
  return sequnce;
}

console.log(getfibonnaci(8));

function findPrimeNumber(number) {

    const primes = [];

    for (let i = 2; i <= number; i++) {
        while (number % 2 == 0) {
            primes.push(number);
            number /= i
        }
    }

    return primes;
}

// console.log(findPrimeNumber(12));
// console.log(findPrimeNumber(13));
// console.log(findPrimeNumber(24));

// console.log("a"|| "b");
// console.log(null==undefined);




// Write a code on how to calculate the number of vowels and consonants in a string?


function countVowelAndConsonent(str) {
  const lowercaseStr = str.toLowerCase();
  console.log(lowercaseStr);

  let vowelCount =0;
 let consonentCounentCount = 0;

  const vowel = ["a","e","i","o","u"]

  for (let i = 0; i < lowercaseStr.length; i++) {
    const charecter = lowercaseStr[i];

    if(/[a-z]/.test(charecter)){
      if(vowel.includes(charecter)){
        vowelCount++
      }else{
        consonentCounentCount++
      }
    }
    
  }

  return {vowelCount:vowelCount,consonentCounentCount:consonentCounentCount}

}


const result = countVowelAndConsonent('hello javascript')
console.log("result:",result);