import readlineSync from 'readline-sync';
import greeting from './cli.js';
import randomNumber from './randomNumber.js';

const isEvenNumber = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const playRounds = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let currentAnswers = 0; currentAnswers < 3;) {
    const randomNum = randomNumber(1, 100);
    console.log(`Question: ${randomNum}`);
    const correctAnswer = isEvenNumber(randomNum);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      currentAnswers += 1;
    } else {
      console.log("yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};

export default playRounds;
