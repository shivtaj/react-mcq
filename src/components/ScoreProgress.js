import { useState, useEffect } from 'react';

function ScoreProgress({activeQuestion}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((activeQuestion +1) * 5)
    }, [activeQuestion]);
    
    return (
    <div class="container mt-5">
        <div style={{width: '100%'}}>
            <span style={{}}>Score: 69%</span>
            <span style={{float: 'right'}}>Max Score: 75%</span>
        </div>
        <div class="progress">
            <div class="progressBar" role="progressbar" style={{width: '50%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progressBar-light" role="progressbar" style={{width: '10%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progressBar-moreLight" role="progressbar" style={{width: '5%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    );
}

export default ScoreProgress;