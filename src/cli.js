import readlineSync from 'readline-sync';


export const name = () => {
    const yourName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + yourName + '!');
};



