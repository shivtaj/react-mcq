import React, { useState, useEffect} from "react";
import { useData } from '../context/DataContext';

function StarRate({activeQuestion}) {  
  const { jsonData } = useData();
  const[rating, setRating]=useState(1);
  const on={ color: '#000'};
  const off={color: '#ccc'};

  useEffect(() => {
    hardLevel();
  }, [activeQuestion]);

  const hardLevel = () =>{
    const level = jsonData[activeQuestion]?.difficulty
        if(level =='hard'){
          setRating(3);
        }if(level == 'easy'){
          setRating(1);
        }if(level =='medium'){
          setRating(2);
        }
    }

  return(
  <div className="star-rating">
  {[...Array(5)].map((star, index) => {
    index += 1;
    return (
      <span
        key={index}
        style={index <= rating ? on : off}
      >
        <span className="star">&#9733;</span>
      </span>
    );
  })}
</div>
)
}

export default StarRate;