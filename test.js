// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One EURO should be 1.206 DOLLARS", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 EURO are 1.206 DOLLARS, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(roundMoney(fromEuroToDollar(3.50))).toBe(4.20); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One DOLLAR should be 106.58 YEN", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(3.5)

    const expected =  (3.5 / 1.2) * 127.9;
    
    // this is the comparison for the unit test
    expect(roundMoney(fromDollarToYen(3.5))).toBe(373.04);
})

test("One YEN should be 0.006 POUNDS", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    const expected =  (3.5 / 127.9) * 0.8;
    
    // this is the comparison for the unit test
    expect(roundMoney(fromYenToPound(3.5))).toBe(0.02);
})

function roundMoney (money) {
    return Math.round((money + Number.EPSILON) * 100) / 100
}