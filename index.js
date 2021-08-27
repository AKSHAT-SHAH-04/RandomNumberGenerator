module.exports = (number1 = 10, number2) => {
let number = new Date().getMilliseconds();
let bunch = [];
let result;
if (!number2) {

    for(let i = 0; i < number1; i++)
    {
        let number2 = number * i;
        bunch.push(number2);
        result = bunch.join("");
    }
    return result.substring(0, number1);
}
else {
    let number2 = parseInt((number / 1000) * (number2 - number1) + number1);
    return number2;
}

};