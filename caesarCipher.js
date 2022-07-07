const isLetter = (char) => {
  return char.match(/[A-Za-z]/)
}

const isUpperCase = (char) => {
  return char === char.toUpperCase()
}

const caesarCipher = (str, num) => {
  const stringArray = [...str]
  let newArray = []

  for (let char of stringArray) {
    if (isLetter(char)) {
      const charCode = char.toLowerCase().charCodeAt(0)
      const shiftedCode = (((charCode - 97 + num) % 26) + 97)
      const newLetter = String.fromCharCode(shiftedCode)

      if (isUpperCase(char)) {
        newArray.push(newLetter.toUpperCase())
      } else {
        newArray.push(newLetter)
      }
    } else {
      newArray.push(char)
    }
  }
  return newArray.join('')
}

export default caesarCipher

//let example =  caesarCipher('HelloWorld', 5)
//console.log(example)