import gameFlow from ".."; // eslint-disable-line
import randomNum from '../random';

const rules = 'Answer "yes" if number prime otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const quessNum = randomNum(1, 101);
  const question = `Is this number prime? ${quessNum}`;

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }

    const iter = (n, k) => {
      if (n % k === 0) {
        return false;
      } else if (k < n / 2) {
        return iter(n, k + 1);
      }
      return true;
    };

    return iter(num, 3);
  };


  const correctAnswer = isPrime(quessNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const prime = () => gameFlow(rules, generateQuestionAndAnswer);
export default prime;
