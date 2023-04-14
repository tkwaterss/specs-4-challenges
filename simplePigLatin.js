//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
test1 = "this is a, new type, of sentance. can't stop me now!"


const pigIt = str => {
    return str.split(' ').map(word => {
        if (word.includes('.') || word.includes(',') || word.includes('!') || word.includes('?')) {
            word = word.split('');
            word.splice(word.length - 1, 0, word[0] + 'ay')
            word.shift();
            return word.join('')
        } else {
            word = word.split('')
            word.push(word[0] + 'ay')
            word.shift();
            return word.join('');
        }
    }).join(' ')
}

console.log(pigIt(test1))