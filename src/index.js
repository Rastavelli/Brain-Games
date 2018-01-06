import readlineSync from 'readline-sync';

const gameFlow = (gameRules, questionGenerator, correctAnswer) => {
  console.log('Welcome to the Brain Games!');

  console.log(gameRules);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  for (let i = 0; i < 3; i += 1) {
    const question = questionGenerator();
    const rightAnswer = correctAnswer(question);

    console.log(`Question: ${question}`);
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

export default gameFlow;
