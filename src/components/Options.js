import { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import "../App.css";

function Options({activeQuestion}) {
    const { jsonData } = useData();
    const [totalOption, setTotalOption] = useState([]);
    const [rightAnswer, setRightAnswer] = useState(false);
    const [isActive, setIsActive] = useState(null);
    const correctOptionStyle = { backgroundColor: "black", color: "white"};
    const incorrectOptionStyle = { backgroundColor: "white", color: "black"};
    
    useEffect(() => {
      setRightAnswer(false);
      setIsActive(null);
      pushOptionToExisitingArray();
    }, [activeQuestion]);

    const pushOptionToExisitingArray = () => {
        const correctOption = jsonData[activeQuestion]?.correct_answer;
        const incorrectOption = jsonData[activeQuestion]?.incorrect_answers;
        var allOptions=[];
        allOptions = incorrectOption;
        allOptions.push(correctOption)
        const withoutDuplicates = Array.from(new Set(allOptions)).sort();
        if(correctOption && incorrectOption){
            setTotalOption(withoutDuplicates)
        }
    };

    const chooseOption = (optionVal, index) =>{
      setIsActive(optionVal);
      const correctOptionIndex = totalOption.findIndex(ele => ele === jsonData[activeQuestion]?.correct_answer); 
      if(index == correctOptionIndex){
        setRightAnswer(true);
      }else{
        setRightAnswer(false);
      }
    }  
    return (
      <div>
        <div class="container mt-5">
          <div class="row row-cols-2">
          {totalOption.map((optionVal, index) => {
            return(
              <div class="col">
                <button class="mb-4" style={isActive == optionVal ? correctOptionStyle : incorrectOptionStyle} onClick={() => chooseOption(optionVal, index)}>
              {decodeURI(optionVal)}
              </button>
              </div>
            )
          })}
          </div>
        </div>
        <div class="result-text">
          {(isActive ) && <span>{rightAnswer ? 'Correct!' : 'Sorry!'}</span> }
        </div>
      </div>
  );
}

export default Options;
