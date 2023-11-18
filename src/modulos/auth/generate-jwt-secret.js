const fs = require('fs');
const crypto = require('crypto');

const generateJwtSecretKey = () => {
  const secretKey = crypto.randomBytes(32);
  return secretKey.toString('hex');
};

const jwtSecretKey = generateJwtSecretKey();

// Salva a chave gerada no arquivo .env
fs.writeFileSync('.env', `JWT_SECRET_KEY=${jwtSecretKey}\n`);

console.log('Chave JWT gerada e salva em .env:', jwtSecretKey);
