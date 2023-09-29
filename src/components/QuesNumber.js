import { useData } from '../context/DataContext';
import '../App.css';

function QuesNumber({activeQuestion}) {
    const { jsonData } = useData();

  return (
    <div className="App">
     <div>Question {activeQuestion +1} of {jsonData.length}</div>
     <div className='entertainment'>
        <span>{decodeURIComponent(jsonData[activeQuestion]?.category)}</span>
     </div>
    </div>
  );
}

export default QuesNumber;