import gameFlow from ".."; // eslint-disable-line

const rules = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => Math.floor(Math.random() * 101);

const correctAnswer = question => (question % 2 === 0 ? 'yes' : 'no');

const even = () => gameFlow(rules, generateQuestion, correctAnswer);
export default even;