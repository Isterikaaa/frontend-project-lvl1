import readlineSync from 'readline-sync';

const name = () => {
  const yourName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + yourName + '!');
};
export default name;
