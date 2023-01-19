const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let numArr = []
    for (let i = 0; i < expr.length; i = i + 10) {
        numArr.push(expr.slice(i, i + 10))
    }

    let morseArr = []
    numArr.forEach((el) => {
        let letter = ''
        for (let j = 10; j > 0; j = j - 2) {
            const elemStep = el[j - 2] + el[j - 1]
            switch (elemStep) {
                case '10':
                    letter = '.' + letter
                    break
                case '11':
                    letter = '-' + letter
                    break
                case '**********':
                    letter = '' + letter
                    break
            }
        }
        morseArr.push(letter)
    })

    let result = ''
    morseArr.forEach((item) => {
        if (!MORSE_TABLE[item]) {
            result = result + ' '
        }
        Object.keys(MORSE_TABLE).forEach((key) => {
            if (item === key) {
                result = result + MORSE_TABLE[key]
            }
        })
    })

    return result
}

module.exports = {
    decode
}
