// Write a code on how to calculate the number of vowels and consonants in a string?

function countVowelConsonent(str) {
  const string = str.toLowerCase();

    let vowelCount = 0;
    let consonentCount = 0;

    const vowel = ["a", 'e', 'i', 'o', 'u']
    for (let i = 0; i < string.length; i++) {
        const charecter = string[i];

        if (/[a-z]/.test(charecter)) {
            if (vowel.includes(charecter)) {
                vowelCount++
            } else {
                consonentCount++
            }
        }

    }

    return { vowelCount: vowelCount, consonentCount: consonentCount }
}

const result1 = countVowelConsonent('hello Javascript');
console.log(result1);








// Write a code to calculate if the string is palindrome ? 
function inPalidrom(str) {
    const string = str.toLowerCase();
    const length = string.length;

    for (let i = 0; i < length / 2; i++) {


        if (string[i] !== string[length - 1 - i]) {
            return false
        }

    }
    return true;

}

const result = inPalidrom('mama');
// console.log(result);







// Explain what a callback function is and provide a simple example? 
// 

function performTask(task, callback) {
    console.log("Performing task: " + task);

    setTimeout(function () {
        console.log("Task completed: " + task);
        callback();
    }, 2000);
}


function afterTaskCompleted() {
    console.log("Callback function executed: Task is done!");
}


performTask("Example Task", afterTaskCompleted);
