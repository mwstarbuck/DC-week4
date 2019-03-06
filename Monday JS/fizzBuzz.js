
function divBy3(num) {
    if (num % 3 == 0) {
        return true;
    }
}

function divBy5(num) {
    if (num % 5 == 0) {
        return true;
    }
}

function fizzBuzz() {
    let num = prompt("Please enter a number: ")
    let result = "";
    if (divBy3(num) && divBy5(num)) {
        result = "Fizz Buzz";
    } else if (divBy3(num)) {
        result = "Fizz";
    } else if (divBy5(num)) {
        result = "Buzz";
    } else {
        result = "Nope";
    }
    //return result;
    console.log(result);
    alert(result);
}
