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
    "": " " 
};

function decode(expr) {
    let mass = expr.split("");
    let prover = " ";
    let s = " ";
    for (let i = 0; i < mass.length; i = i++) {
        prover = mass.splice(i, 10).join("");      
      if (prover == "**********") {
        s = s + "";
      }  
      let decoded =""
      for (let j = 0; j < 10;  j= j + 2) {
        if (prover[j] == "1" && prover[j + 1] == "0") {
          decoded = decoded + "." ;
        }
        if (prover[j] == "1" && prover[j + 1] == "1") {
          decoded = decoded + "-";
        }     
      }
      s=s+MORSE_TABLE[decoded]      
    }  
    
    return  s.trim();      
}

module.exports = {
    decode
}