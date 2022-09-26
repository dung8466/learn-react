import React, {Component} from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component{
    static defaultProps = {
        nCell: 5,
        chanceLightStartsOn: 0.25
    }
    constructor(props){
        super(props);
        this.state = {
            board: this.createBoard(),
            isWinner: false
        }
    }
    createBoard() {
        let board = [];
        for(let y = 0; y < this.props.nCell; y++){
            let rows = [];
            for(let x = 0; x < this.props.nCell; x++){
                rows.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(rows);
        }
        return board
      }
    flipCellsAround(coord){
        let {nCell} = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);


        function flipCell(y, x) {
        // if this coord is actually on board, flip it
            if (x >= 0 && x < nCell && y >= 0 && y < nCell) {
                board[y][x] = !board[y][x];
            }
        }
        flipCell(y,x);
        flipCell(y-1,x);
        flipCell(y,x-1);
        flipCell(y+1,x);
        flipCell(y,x+1);
        let isWinner = board.every(row => row.every(cell => !cell));
        this.setState({board: board, isWinner: isWinner});
    }
    makeBoard(){
        let boardGame = [];
        for(let y = 0; y < this.props.nCell; y++){
            let rows = [];
            for(let x = 0; x < this.props.nCell; x++){
                let coord = `${y}-${x}`
                rows.push(
                    <Cell 
                        key={coord} 
                        isLit={this.state.board[y][x]} 
                        flipCellsAroundMe={() => this.flipCellsAround(coord)}
                    />);
            }
            boardGame.push(<tr key={y}>{rows}</tr>);
        }
        return(
            <table>
                <tbody>
                    {boardGame}
                </tbody>
            </table>
        );
    }
    render(){
        return (
            <div>
              {this.state.isWinner ? (
                <div className='winner'>
                  <span className='neon-orange'>YOU</span>
                  <span className='neon-blue'>WIN!</span>
                </div>
              ) : (
                <div>
                  <div className='Board-title'>
                    <div className='neon-orange'>Lights</div>
                    <div className='neon-blue'>Out</div>
                  </div>
                  {this.makeBoard()}
                </div>
              )}
            </div>
          );
    }
}

export default Board;