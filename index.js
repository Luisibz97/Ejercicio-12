
const fibonacci = num => {
    const value =  [0, 1]

    for ( let i = 2; i < num; i++ ) {
        value[i] = value[i - 2] + value[i - 1]
    
    } return value;

}

console.log(fibonacci(10));
