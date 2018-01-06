import gameFlow from '..'; // eslint-disable-line
import randomNum from '../random';

const rules = 'What is the result of the expression?';

const generateQuestion = () => {
  const num1 = randomNum(101);
  const num2 = randomNum(101);
  const operators = ['+', '-', '*'];
  const currentOperator = operators[randomNum(operators.length)];
  const question = `${num1} ${currentOperator} ${num2}`;

  return question;
};

const correctAnswer = (question) => {
  const expression = question.split(' ');
  const num1 = Number(expression[0]);
  const operator = expression[1];
  const num2 = Number(expression[2]);

  switch (operator) {
    case '*':
      return (num1 * num2).toString();
    case '-':
      return (num1 - num2).toString();
    default:
      return (num1 + num2).toString();
  }
};

const calc = () => gameFlow(rules, generateQuestion, correctAnswer);
export default calc;
