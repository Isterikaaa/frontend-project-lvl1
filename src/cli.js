import readlineSync from 'readline-sync';

const name = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
};
export default name;
