import readlineSync from 'readline-sync';

const printGreetings = () => console.log('Welcome to the Brain Games!');

const even = () => {
  printGreetings();

  console.log('Answer "yes" if number even otherwise answer "no".');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 101);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export { printGreetings };
export default even;
