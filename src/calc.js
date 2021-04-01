import readlineSync from 'readline-sync';
import greeting from './cli.js';
import randomNumber from './randomNumber.js';

const findingARandomSign = () => {
  const sign = ['-', '+', '*'];
  return sign[randomNumber(0, 2)];
};

const calculation = (num1, sign, num2) => {
  let result;
  switch (sign) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const playRounds = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  for (let currentAnswers = 0; currentAnswers < 3;) {
    const randomNum = randomNumber(1, 25);
    const randomNum2 = randomNumber(1, 25);
    const randomSigns = findingARandomSign();
    console.log(`Question: ${randomNum} ${randomSigns} ${randomNum2}`);
    const correctAnswer = String(calculation(randomNum, randomSigns, randomNum2));
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
