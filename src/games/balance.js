import gameFlow from '..'; // eslint-disable-line
import randomNum from '../random';

const rules = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const num = randomNum(10, 9999);
  const question = `${num}`;

  const findBalancedNum = (digit) => {
    const digitArr = digit.split('').map(Number);
    const max = Math.max(...digitArr);
    const min = Math.min(...digitArr);

    if ((max === min) || (max - min === 1)) {
      return digit;
    }

    const maxIndex = digitArr.indexOf(max);
    const minIndex = digitArr.indexOf(min);

    const newDigitArr = digitArr.reduce((acc, item, index) => {
      if (index === maxIndex) {
        return acc.concat(max - 1);
      } else if (index === minIndex) {
        return acc.concat(min + 1);
      }
      return acc.concat(item);
    }, []);

    return findBalancedNum(newDigitArr.join(''));
  };

  const correctAnswer = findBalancedNum(question);

  return [question, String(correctAnswer)];
};

const balance = () => gameFlow(rules, generateQuestionAndAnswer);

export default balance;

generateQuestionAndAnswer();
