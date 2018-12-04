import React,{ Component } from 'react';
import Button from "./Button";

class Board extends Component {

    render() {
        return (
            <div className="board">
                <div className="row">
                    <Button handleClick={this.props.handleClick}>7</Button>
                    <Button handleClick={this.props.handleClick}>8</Button>
                    <Button handleClick={this.props.handleClick}>9</Button>
                    <Button className={"orange"} handleClick={this.props.handleClick}>/</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.props.handleClick}>4</Button>
                    <Button handleClick={this.props.handleClick}>5</Button>
                    <Button handleClick={this.props.handleClick}>6</Button>
                    <Button className={"orange"} handleClick={this.props.handleClick}>*</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.props.handleClick}>1</Button>
                    <Button handleClick={this.props.handleClick}>2</Button>
                    <Button handleClick={this.props.handleClick}>3</Button>
                    <Button className={"orange"} handleClick={this.props.handleClick}>+</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.props.handleClick}>.</Button>
                    <Button handleClick={this.props.handleClick}>0</Button>
                    <Button handleClick={this.props.handleClick}>(</Button>
                    <Button className={"orange"} handleClick={this.props.handleClick}>-</Button>
                </div>
                <div className="row">
                    <div></div>
                    <Button handleClick={this.props.handleClick}>^</Button>
                    <Button handleClick={this.props.handleClick}>)</Button>
                    <Button className={"orange"} handleClick={this.props.handleClick}>=</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.props.handleClick}>sin</Button>
                    <Button handleClick={this.props.handleClick}>cos</Button>
                    <Button handleClick={this.props.handleClick}>tan</Button>
                    <Button handleClick={this.props.handleClick}>clear</Button>
                </div>
            </div>
        );
    }
}

export default Board;