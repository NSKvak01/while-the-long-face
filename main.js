function numberDoubler(num) {
    // Your code here
    while (num <100){
        num = num*2
    }
    return num
}

function stringRepeater(str) {
    // Your code here
    let str1 = ''
    while (str1.length<10){
        str1= str1+str
        console.log(str1)
    }
    return str1
}

function makeDivisible(x, y) {
    // Your code here
    while (!(x%y === 0)){
        x++
    }
    return x;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};