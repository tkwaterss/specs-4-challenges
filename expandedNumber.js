//You will be given a number and you will need to return it as a string in Expanded Form. For example:

const expandedForm = num => {
    let check = 10
    let expanded = [];
    while (expanded.length < String(num).length) {
        let word = num % check;
        word === 0 ? '' : expanded.push(word);
        // expanded.push(word);
        num -= word
        check *= 10
    }
    return expanded.reverse().join(' + ')
}

// console.log(expandedForm(1305621))

//White the Number in Expanded Form - Part 2
const expandedForm2 = num => {
    num = String(num).split('.')
    let firstHalf = num[0].split('').reverse().map((num, i) => {
        Math.pow(num, i)
    })
    let secondHalf = num[1].split('')
    
    
}

console.log(expandedForm2(1502.16))