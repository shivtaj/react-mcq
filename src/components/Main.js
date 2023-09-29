import Questions from "./Questions";
import Options from "./Options";
import QuesNumber from "./QuesNumber";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import ScoreProgress from "./ScoreProgress";
import StarRate from "./StarRate";
import { useState } from "react";
import { DataProvider } from '../context/DataContext';
import jsonData from "../json/question.json";
import "../App.css"

function Main() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const nextBtn = () => {
       if((activeQuestion +1) < jsonData.length){
        setActiveQuestion(activeQuestion + 1)
       }else{
        return
       }
      }
    
  return (
    <DataProvider>
    <div className="main">
      <div>
          <ProgressBar activeQuestion={activeQuestion}></ProgressBar>
      </div>
      <div className="main-content mt-5">
        <QuesNumber activeQuestion={activeQuestion}></QuesNumber>
        <StarRate activeQuestion={activeQuestion}></StarRate>
        <Questions activeQuestion={activeQuestion}></Questions>
        <Options activeQuestion={activeQuestion} setScore={setScore} score={score}></Options>
        <Button nextBtn ={nextBtn}></Button>
      </div>
    </div>
    <div>
      <ScoreProgress activeQuestion={activeQuestion} score={score}></ScoreProgress>
    </div>
    </DataProvider>
  );
}

export default Main;
