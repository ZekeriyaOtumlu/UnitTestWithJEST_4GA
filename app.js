// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

    let euroToJPY = 127.9; // japan yen
    let euroToUSD = 1.2; // us dollar
    let euroToGBP= 0.8; // british pound


function fromDollarToYen(dollar){
    //dollar - euro- yen
let dollarAsEuro = dollar/euroToUSD;
let finalYen = dollarAsEuro * euroToJPY;
return Math.floor(finalYen);
}
function fromEuroToDollar(euro){
    //euro -dollar
let finalDollar = euro * euroToUSD;
return finalDollar;
}
function fromYenToPound(yen){
    //ye to euro -euro to dollar
    let yenAsEuro = yen / euroToJPY;
    let finalPound = yenAsEuro * euroToGBP;
    return finalPound;
}
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };