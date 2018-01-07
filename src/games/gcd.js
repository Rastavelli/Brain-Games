import gameFlow from '..'; // eslint-disable-line
import randomNum from '../random';

const rules = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const num1 = randomNum(1, 101);
  const num2 = randomNum(1, 101);
  const question = `${num1} ${num2}`;

  const findGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGcd(b, a % b);
  };

  const correctAnswer = findGcd(num1, num2);

  return [question, String(correctAnswer)];
};

const gcd = () => gameFlow(rules, generateQuestionAndAnswer);

export default gcd;
