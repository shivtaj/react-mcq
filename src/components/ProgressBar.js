import { useState, useEffect } from 'react';
import '../App.css';

function ProgressBar({activeQuestion}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((activeQuestion +1) * 5)
    }, [activeQuestion]);
    
    return (
    <div>
      <div className="progress">
        <div className="progressBar" role="progressbar" style={{ width: progress + "%" }}>
          
        </div>
      </div>
    </div>
    );
}

export default ProgressBar;