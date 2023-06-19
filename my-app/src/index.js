import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  let className =`squere`;
  // if (this.props.xIsNext) {
  //   className += ' red';
  // }
   return (
     <button className={className} onClick={props.onClick}>
      
     </button>
   );
 }
 
 class Board extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       squares: Array(9).fill(null),
       xIsNext: true,
     };
   }
   
   handleClick(i) {
     const squares = this.state.squares.slice();
     console.log(squares);
     if (calculateWinner(squares) || squares[i]) {
       return;
     }
     squares[i] = this.state.xIsNext ? 'red' : 'green';
     this.setState({
       squares: squares,
       xIsNext: !this.state.xIsNext,
       i:0,
     });
   }
 
   renderSquare(i) {
     return (
       <Square
         value={this.state.squares[i]}
         onClick={() => this.handleClick(i)}
       />
     );
   }
 
   render() {
     const winner = calculateWinner(this.state.squares);
     let status;
     if (winner) {
       status = 'Winner: ' + winner;
     } else {
       status = 'Next player: ' + (this.state.xIsNext ? 'red' : 'green');
     }
 
     return (
       <div>
         <div className="status">{status}</div>
         <div className="board-row">
           {this.renderSquare(0)}
           {this.renderSquare(1)}
           {this.renderSquare(2)}
           {this.renderSquare(3)}
           {this.renderSquare(4)}
         </div>
         <div className="board-row">
           {this.renderSquare(5)}
           {this.renderSquare(6)}
           {this.renderSquare(7)}
           {this.renderSquare(8)}
           {this.renderSquare(9)}
         </div>
         <div className="board-row">
         {this.renderSquare(10)}
           {this.renderSquare(11)}
           {this.renderSquare(12)}
           {this.renderSquare(13)}
           {this.renderSquare(14)}
         </div>
         <div className="board-row">
         {this.renderSquare(15)}
         {this.renderSquare(16)}
           {this.renderSquare(17)}
           {this.renderSquare(18)}
           {this.renderSquare(19)}
           
         </div>
         <div className="board-row">
            {this.renderSquare(20)}
         {this.renderSquare(21)}
           {this.renderSquare(22)}
           {this.renderSquare(23)}
           {this.renderSquare(24)}
           
         </div>
       </div>
     );
   }
 }

 class Game extends React.Component {
   render() {
     return (
       <div className="game">
         <div className="game-board">
           <Board />
         </div>
         <div className="game-info">
           <div>{/* status */}</div>
           <ol>{/* TODO */}</ol>
         </div>
       </div>
     );
   }
 }
 
 // ========================================
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Game />);
 
 function calculateWinner(squares) {
   const lines = [
     [0, 1, 2,3,4],
     [5,6,7,8,9],
     [10,11,12,13,14],
     [15,16,17,18,19],
     [20,21,22,23,24],
   //   [2, 5, 8],
   //   [0, 4, 8],
   //   [2, 4, 6],
   ];
   for (let i = 0; i <lines.length; i++) {
    //  const [a, b, c,d] = lines[i];
    console.log(lines[i]);
      for(let j = 0; j < lines[i].length; j++){
        console.log()
        if(squares[lines[i][j]] != null){
          if (squares[lines[i][j]] === squares[lines[i][j] + 1] && squares[lines[i][j]]=== squares[lines[i][j]+2]) 
         {
        console.log("dd");
        return squares[lines[i][j]]
        }else if((squares[lines[i][j]]===squares[lines[i][j]+6] &&squares[lines[i][j]]===squares[lines[i][j]+12] )){
            console.log("kyky")
            return squares[lines[i][j]]
        }else if( (squares[lines[i][j]]===squares[lines[i][j]+5] &&squares[lines[i][j]]===squares[lines[i][j]+10] )){
            console.log("vert ")
            return squares[lines[i][j]]
        }else if(squares[lines[i][j]]===squares[lines[i][j]+4] &&squares[lines[i][j]]===squares[lines[i][j]+8] ){
          console.log("dig")
          return squares[lines[i][j]]
        }
        }
         
      }
    //  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a]==squares[d]) {
    //    return squares[a];
    //  }
   }
  //  return null;
  // }

//  const has3 = arr => {
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1] && arr[i] === arr[i - 2]) {
//       return true;
//     }
//   }
//   return false;
// }
  }