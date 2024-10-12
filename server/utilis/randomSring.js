const generateCode = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz123456789";
  const characterLength = characters.length;
  const resultArray = new Array(9);
  for (let i = 0; i < 9; i++) {
    resultArray[i] = characters.charAt(
      Math.floor(Math.random() * characterLength)
    );
  }
  return resultArray.join("");
};

const generatePassword = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz123456789";
  const characterLength = characters.length;
  const resultArray = new Array(8);
  for (let i = 0; i < 8; i++) {
    resultArray[i] = characters.charAt(
      Math.floor(Math.random() * characterLength)
    );
  }
  return resultArray.join("");
};

module.exports = { generateCode, generatePassword };
