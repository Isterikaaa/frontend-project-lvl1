import greeting from '../src/cli.js';

import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const findingARandomSign = () => {
    const sign = ['-', '+', '*'];
    return sign[randomNumber(0, 2)];
  };
  
  
  const calculation = (num1, sign, num2) => {
    switch (sign) {
      case '-':
        return num1 - num2;
          break;
      case '+':
        return num1 + num2;
          break;
      case '*':
        return num1 * num2;
          break;
    }
  };
  
  const playRounds = () => {
    const name = greeting();
    console.log('What is the result of the expression?');
    for (let currentAnswers = 0; currentAnswers < 3;) {
      let randomNum = randomNumber(1, 25);
      let randomNum2 = randomNumber(1, 25);
      let randomSigns = findingARandomSign();
      console.log(`Question: ${randomNum} ${randomSigns} ${randomNum2}`);
      let correctAnswer = String(calculation(randomNum, randomSigns, randomNum2));
      let playerAnswer = readlineSync.question('Your answer: ');
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