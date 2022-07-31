import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleNext = (answer) => {
    if (counter + 1 === questions.length) {
      if (answer === questions[counter].answers[questions[counter].correct])
        setScore((score) => score + 1);
      setFinish(true);
      return;
    }
    if (answer === questions[counter].answers[questions[counter].correct])
      setScore((score) => score + 1);
    setCounter((counter) => counter + 1);
  };

  const handleTryAgain = () => {
    setFinish(false);
    setScore(0);
    setCounter(0);
  };
  return (
    <div className="w-full h-screen bg-gradient-to-r to-indigo-500 from-blue-400">
      <div className="container mx-auto my-0 w-full max-w-[800px] flex items-center h-screen px-4">
        {finish ? (
          <div className="w-full flex justify-center text-white">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-8xl font-bold ">
                  {parseFloat(((score / questions.length) * 100).toFixed(2))}%
                </h2>
                <p className="text-2xl">
                  You scored {score} out of {questions.length}!
                </p>
              </div>
              <button
                onClick={handleTryAgain}
                className="border px-6 py-2 rounded-xl hover:text-indigo-700 hover:bg-white transition transition-colors"
              >
                Go Again
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full sm:px-8 space-y-4 sm:py-8 py-6 px-6 rounded-3xl shadow-lg bg-white">
            <div className="space-y-1 sm:space-y-4">
              <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-slate-800">
                {questions[counter].question}
              </h2>
              <p className="text-slate-400 ">Choose from the answers below:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex flex-wrap">
              {questions[counter].answers.map((choice, idx) => (
                <div
                  key={idx}
                  className={
                    "transition transition-colors flex items-center h-13 rounded-xl border border-slate-300 hover:border-indigo-400 hover:outline outline-offset-2 outline-2 outline-indigo-500  hover:bg-indigo-50"
                  }
                >
                  <input
                    id={`${idx}`}
                    type="submit"
                    value={choice}
                    onClick={(e) => handleNext(e.target.value)}
                    className={
                      "hover:cursor-pointer h-12 text-slate-400 font-medium hover:text-indigo-600 w-full"
                    }
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <p className="text-slate-800 font-semibold">
                Question {counter + 1} of {questions.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
