import React, { useState, useEffect, useContext } from "react";
import { QUESTIONS } from "./data/data";
import Quiz from "./components/Quiz";
const App = () => {
  return <Quiz questions={QUESTIONS} />;
};

export default App;
