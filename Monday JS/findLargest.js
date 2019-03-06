function findLargest() {
    let numbers = [1, 5, 25, 13, 7, 9];
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (largest < numbers[i]) {
            largest = numbers[i];
        }
    }
    console.log(largest);
    alert(largest);
}