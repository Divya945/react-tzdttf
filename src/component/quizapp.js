import React, { useState } from 'react';
import './style.css';

export default function quizapp() {
  const questions = [
    {
      questionText: 'Who is Prime Minister of India?',
      answerOptions: [
        { answerText: 'Vijay Rupani', isCorrect: false },
        { answerText: 'Manmohan singh', isCorrect: false },
        { answerText: 'Narendra Modi', isCorrect: true },
        { answerText: 'Deep Patel', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tata?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Ratan Tata', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Gautam Adani', isCorrect: false },
      ],
    },
    {
      questionText: 'who is richest person in the world?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Warren Buffett', isCorrect: false },
      ],
    },
    {
      questionText: 'how many countries in the world?',
      answerOptions: [
        { answerText: '120', isCorrect: false },
        { answerText: '183', isCorrect: false },
        { answerText: '170', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
  ];
  const [currentquetion, SetCurrentQuetion] = useState(0);
  const [showscore, setShowscore] = useState(false);
  const [score, setScore] = useState(0);

  const nextquetionhandler = (isCorrect, answerOption) => {
    console.log('next');

    const nextquetion = currentquetion + 1;

    if (isCorrect === true) {
      alert('correct');
      setScore(score + 1);
      console.log(setScore(score + 1));
    } else {
      alert('not correct');
    }
    if (nextquetion < questions.length) {
      console.log(questions.length);
      SetCurrentQuetion(nextquetion);
    } else {
      alert('This is last quetion');
      //setShowScore(true);
      //console.log(setShowScore);
      setShowScore(true);
    }
  };
  return (
    <div>
      (
      {showscore ? (
        <div>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          Quiz
          <p>{questions[currentquetion].questionText}</p>
          <div>
            {questions[currentquetion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => nextquetionhandler(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </div>
      )}
      );
    </div>
  );
}
