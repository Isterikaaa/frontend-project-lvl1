import name from '../src/cli.js';

import readlineSync from 'readline-sync';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const isEvenNumber = (num) => (num % 2 === 0) ? 'yes' : 'no';
isEvenNumber(randomNumber(1, 100));

const playRounds = () => {
    name();
  for (let currentAnswers = 0; currentAnswers < 3;) {
    let randomNum = randomNumber(1, 100);
    console.log(`Question: ${randomNum}`);
    let correctAnswer = isEvenNumber(randomNum);
    let playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      currentAnswers += 1;
    } else {
        console.log("yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again");
        return;
      } 
  } console.log(`Congratulations, ${yourName}!`);
};
playRounds();
