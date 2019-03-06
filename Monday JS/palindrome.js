function palindromeCheck() {
    let word = prompt("Please enter a word:");
    let comparison = "";
    tempWord = word.toLowerCase();
    for (let i = tempWord.length - 1; i >= 0; i--) {
        comparison += tempWord[i];
    }
    if (tempWord === comparison) {
        console.log(word + " is a palindrome.");
        alert(word + " is a palindrome.");
    } else {
        console.log(word + " is NOT a palindrome.");
        alert(word + " is NOT a palindrome.");

    }
}


let list = ["John", "Mary", "Alex", "Steve", "Mary", "John"];
function removeDuplicates(list) {
    let noDups = [];
    for (let i = 0; i < list.length; i++) {
        name = list[i];
        if (noDups.length === 0) {
            noDups.push(name);
        }
        // dulpicate variable from Azam's code
        duplicate = false;
        for (let j = 0; j < noDups.length; j++) {
            if (name == noDups[j]) {
                duplicate = true;
                break;
            }
        }
        if (duplicate == false) {
            noDups.push(name);
        }
    }
    console.log(noDups);
    alert(noDups);
}

function isPresent() {
    numbers = [1, 3, 6, 9, 12, 5, 7, 10, 15];
    let match = false;
    let index;
    number = prompt("Enter a number between 1 and 15: ");
    for (let i = 0; i < numbers.length; i++) {
        if (number == numbers[i]) {
            match = true;
            index = i;
        }
    }
    if (match == true) {
        alert(match);
        console.log(match);
        // console.log(number + " is in the list at index " + index + ".");
        // alert(number + " is in the list at index " + index + ".")
    } else {
        alert(match);
        console.log(match);
        // console.log(number + " is not in the list.");
        // alert(number + " is not in the list.")
    }

}

