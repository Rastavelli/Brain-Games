import gameFlow from ".."; // eslint-disable-line
import randomNum from '../random';

const rules = 'What number is missing in this progression?';

const generateQuestionAndAnswer = () => {
  const startNum = randomNum(1, 50);
  const step = randomNum(1, 20);
  const seqSize = 10;
  const sequence = [...new Array(seqSize)].reduce((acc) => {
    if (acc.length === 0) {
      return acc.concat(startNum);
    }
    const accLastItem = acc[acc.length - 1];
    return acc.concat(accLastItem + step);
  }, []);
  const quessNumIndex = randomNum(0, seqSize);
  const question = sequence.map((item, index) => {
    if (index === quessNumIndex) {
      return '..';
    }
    return item;
  }).join(' ');
  const correctAnswer = String(sequence[quessNumIndex]);

  return [question, correctAnswer];
};

const progression = () => gameFlow(rules, generateQuestionAndAnswer);
export default progression;
