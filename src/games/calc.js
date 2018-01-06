import gameFlow from '..'; // eslint-disable-line
import randomNum from '../random';

const rules = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const num1 = randomNum(101);
  const num2 = randomNum(101);
  const operators = ['+', '-', '*'];
  const currentOperator = operators[randomNum(operators.length)];
  const question = `${num1} ${currentOperator} ${num2}`;
  let correctAnswer = '';

  switch (currentOperator) {
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = num1 + num2;
  }

  return [question, String(correctAnswer)];
};

const calc = () => gameFlow(rules, generateQuestionAndAnswer);
export default calc;
