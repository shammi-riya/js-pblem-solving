// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


function reverseString(str) {
    let reverse = ''


    for (let i = str.length - 1; i > 0; i--) {
        reverse += str[i];

    }


    return reverse;
}

const result = 'hello javascript'

const outPut = reverseString(result)
// console.log(outPut);





// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function sumPositiveNumber(arr) {
    let sum = 0;

    for (const num of arr) {
        if (num > 0) {
            sum += num
        }
    }

    return sum;



}

const result2 = sumPositiveNumber([-2, 6, -6, -9, 3])
// console.log(result2);



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 


function findMostFrequent(numbers) {

    let FrequintMap = {};
    let maxFrequinty = 0;
    let MostFrequinElement;

    numbers.forEach(element => {
        FrequintMap[element] = (FrequintMap[element] || 0) + 1;

        if (FrequintMap[element] > maxFrequinty) {
          maxFrequinty = FrequintMap[element]
          MostFrequinElement = element;
        }


    });


    return MostFrequinElement;
}

const result3 = findMostFrequent([3, 5,,5,5,5,5, 2, 5, 3, 3, 1, 4, 5])
// console.log(result3);




// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


function findTwoNumbers(arr,target) {
    
    let left =0;
    let right = arr.length-1

    while(left <right){
      const sum = arr[left] + arr[right]


      if(sum ==target){
        return [left,right]
      }else if(sum <target){
        left ++
      }else{
        right --
      }

    }
    return []
}

const array =[1,2,3,2,3,3,8]

const target = 6;
// console.log(findTwoNumbers(array,target));





// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculate(num1 ,oparator,num2) {
    
    switch (oparator) {
        case "+":
            return num1 + num2
        case "*":
            return num1 * num2
        case "-":
            return num1 - num2
        case "/":
            if(num2 == 0){
                return 'can not devide by 0'
            }
            return num1 / num2
            
    
        default:
            break;
    }

}

// console.log(calculate(6,"-",4));



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let total = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentChar = romanNumeral[i];
      const nextChar = romanNumeral[i + 1];
  
      const currentValue = romanValues[currentChar];
      const nextValue = romanValues[nextChar];
  
      if (nextValue > currentValue) {
        total += nextValue - currentValue;
        i++; 
      } else {
        total += currentValue;
      }
    }
  
    return total;
  }
  
  // Example usage:
  const romanNumeral = "XXI";
  const result4 = romanToInteger(romanNumeral);
//   console.log("Corresponding Integer:", result4);
  



//   Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



function findSecondLargestNumber(arr) {
   
    arr.sort((a,b)=>a-b) 
    return arr[1]
    
}

console.log(findSecondLargestNumber([5,8,0,2]));