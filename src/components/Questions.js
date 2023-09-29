import { useData } from '../context/DataContext';
import "../App.css"

function Questions({activeQuestion}) {
    const { jsonData } = useData();
  
    return (
    <div className="question">
     <div>{decodeURIComponent(jsonData[activeQuestion]?.question)}</div>
    </div>
  );
}

export default Questions;
