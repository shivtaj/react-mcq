import '../App.css';

function Button({nextBtn}) {
  return (
    <div className="next-button">
     <button onClick={() => nextBtn()}>Next Question</button>
    </div>
  );
}

export default Button;
