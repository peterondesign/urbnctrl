 const generateCode= ()=>{
    const characters = "abcdefghijklmnopqrstuvwxyz123456789"
    const characterLength = characters.length
    const resultArray = new Array(6)
    for (let i = 0; i < 6; i++) {
      resultArray[i] =characters.charAt(Math.floor(Math.random()*characterLength))
    }
    return resultArray.join('')
 }

 module.exports ={generateCode}