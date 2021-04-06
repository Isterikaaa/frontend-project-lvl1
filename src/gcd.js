import readlineSync from 'readline-sync';
import greeting from './cli.js';
import randomNumber from './randomNumber.js';

const nod = (num1, num2) => {
  for (let i = num1; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
};

const playRounds = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let currentAnswers = 0; currentAnswers < 3;) {
    const randomNum = randomNumber(1, 100);
    const randomNum2 = randomNumber(1, 100);
    console.log(`Question: ${randomNum} ${randomNum2}`);
    const correctAnswer = String(nod(randomNum, randomNum2));
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      currentAnswers += 1;
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};
export default playRounds;
