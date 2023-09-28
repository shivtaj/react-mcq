import { useData } from '../context/DataContext';
import "../App.css"

function Questions({activeQuestion}) {
    const { jsonData } = useData();
  
    return (
    <div className="question">
     <div>{decodeURI(jsonData[activeQuestion]?.question)}</div>
    </div>
  );
}

export default Questions;
