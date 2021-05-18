import readlineSync from 'readline-sync';
import greeting from './cli.js';
import randomNumber from './randomNumber.js';

const primeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playRounds = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let currentAnswers = 0; currentAnswers < 3;) {
    const randomNum = randomNumber(1, 50);
    const correctAnswer = primeNumber(randomNum);
    console.log(`Question: ${randomNum}`);
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
