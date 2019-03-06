function ascendSort() {
    let numbers = [3, 4, 56, 7, 8, 1];

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j < i; j++) {
            if (numbers[j] > numbers[i]) {
                let tempNum = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = tempNum;
            }
        }
    }
    console.log(numbers);
    alert(numbers);
}

function descendSort() {
    let numbers = [3, 4, 56, 7, 8, 1];

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j < i; j++) {
            if (numbers[j] < numbers[i]) {
                let tempNum = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = tempNum;
            }
        }
    }
    console.log(numbers);
    alert(numbers);
}