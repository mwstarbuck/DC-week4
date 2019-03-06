function findSmallest() {
    let numbers = [5, 1, 25, 13, 7, 9];
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (smallest > numbers[i]) {
            smallest = numbers[i];
        }
    }
    console.log(smallest);
    alert(smallest);
}