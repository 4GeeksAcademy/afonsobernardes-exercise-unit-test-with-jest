// one euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the DOLLAR value
    return valueInDollar;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Euros and then to Yen.
    let valueInYen = (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    //return the YEN value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convert the given valueInDollar to Euros and then to Yen.
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    //return the POUND value
    return valueInPound;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};