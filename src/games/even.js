import gameFlow from ".."; // eslint-disable-line
import randomNum from '../random';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const question = randomNum(1, 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const even = () => gameFlow(rules, generateQuestionAndAnswer);
export default even;
