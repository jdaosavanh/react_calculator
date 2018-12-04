import React, { Component } from 'react'
import Board from "./component/Board/Board"
import Display from "./component/Display"
import calculate from "./logic/calculate"
import * as math from "mathjs";
import './App.scss';

class App extends Component {

    state = {
        input:""
    };

    addInputString = value => {
        this.setState({
            input: this.state.input + value
        });
    };
    evalEquation = () => {
        try {
            this.setState({
                input: math.eval(this.state.input)
            });
        }
        catch(error) {
            this.setState({
                input: "Err"
            });
        }
    };

    clear = () => {
        this.setState({
           input:""
        });
    };

    handleClick = (value) => {
        console.log(value);

        if(value === "=")
        {
            this.evalEquation();
        }else if(value === "clear")
        {
           this.clear();
        }
        else
        {
            this.addInputString(value);
        }

    };


    render() {
        return (
            <div className="App">
                <Display value={this.state.input}/>
                <Board handleClick={this.handleClick}/>
            </div>
    );
  }
}

export default App;
