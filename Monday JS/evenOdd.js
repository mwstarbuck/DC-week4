function evenOdd() {
    let num = prompt("Please enter a number: ");
    if (num % 2 == 0) {
        console.log(num + " is EVEN.")
        alert(num + " is EVEN.");
    } else {
        console.log(num + " is ODD.")
        alert(num + " is ODD.");
    }
}