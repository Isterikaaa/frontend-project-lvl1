import readlineSync from 'readline-sync';
import greeting from './cli.js';
import randomNumber from './randomNumber.js';

const progression = (num1, num2) => {
  const firstNum = num1;
  const step = num2;
  const result = [firstNum];
  const random = randomNumber(0, 9);
  for (let i = 0; i < 9; i += 1) {
    result.push(result[result.length - 1] + step);
  }
  const numberBeforeChange = result[random];
  result[random] = '..';
  const arr = [numberBeforeChange, result.join(' ')];
  return arr;
};

const playRounds = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let currentAnswers = 0; currentAnswers < 3;) {
    const randomNum = randomNumber(1, 60);
    const randomNum2 = randomNumber(1, 10);
    const [correctAnswer, question] = progression(randomNum, randomNum2);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === playerAnswer) {
      console.log('Correct!');
      currentAnswers += 1;
    } else {
      console.log(typeof correctAnswer, typeof playerAnswer);
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};

export default playRounds;
