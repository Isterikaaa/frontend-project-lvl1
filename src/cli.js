import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  return yourName;
};
export default greeting;
