// Extract the word 'cats' from the sentence 'It is raining cats & dogs' then join this word with a new sentence 'are beautiful'. The output should be: 'Cats are beautiful' (Note: first letter 'C' must be in uppercase)

const sentence = (input) => {
    let output = "cats are beautiful";
    let findCats = input.includes("cats")
    if (findCats == true) {
        let remainingOutput = output.slice(1);
        let firstLetter = output.charAt(0).toUpperCase();
        let result = firstLetter + remainingOutput;
        return result
    }
    else {
        return "Cats are not Found in this sentence "
    }
}
console.log(sentence("it is raining cats and dogs"));

// Imagine you have a variable with user email (mail@example.com), how can you check if it contains '@' character or not and ends with '.com'? (You can also compare both conditions are true or false)

const userEmailCheck = (email) => {
    let checkAt = email.includes("@");
    let checkCom = email.endsWith(".com")

    if (checkAt == true && checkCom == true) {
        return " Your user  email contains @ char and ends with .com so your user email is valid"
    }
    else {
        return "Your user email is not valid Please try again"
    }
}
console.log(userEmailCheck("mail@example.com"));

// Let's say you have a variable of number which can be any decimal number (integer or float). How can you rounded it to two decimal places where the output data type must be number. (output example: 5.00, 10.23, 56.49)

const makeRounded = (number) => {
    const round = parseFloat(number).toFixed(2)
    const makeNumber = parseFloat(round)
    return makeNumber
}
console.log(makeRounded(12.555545));

// Original price of a product is 'X' taka, discount/sales price is 'Y' taka. Discount percentage is 'Z' %. Declare variable for the amount of 'X', 'Y' & 'Z' separately & assign values. values can be number or number bounded with string. Now calculate the discount percentage and print the output with following template:

const sumOfDiscount = (orginalPrice, discount) => {
    const calculation = ((orginalPrice * discount) / 100)
    const orginalSalesPrice = orginalPrice - calculation;
    const result = 
    `product Summary
    Product Price = BDT ${orginalPrice}
    Discount Price= BDT ${orginalSalesPrice}
    Discount rate = ${discount} %
    `
   return result

}
console.log(sumOfDiscount(100,50));