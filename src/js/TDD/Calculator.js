import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number1: undefined,
            number2: undefined,
            result: undefined
        };
    };

    componentDidMount() {
    };

    onClickButton () {
        const result = this.addNumber(this.state.number1 ,this.state.number2);
        this.setState({result})
    }

    addNumber (num1, num2) {
        return num1 + num2;
    }

    onNumberChange (event) {
        this.setState({number1:Number(event.target.value)});
    }

    onNumberChange2 (event) {
        this.setState({number2:Number(event.target.value)});
    }

    render() {
        return (
            <div className="calculator_conatiner">
                <div className="box_container">
                    <div>Number 1: <input type="number" className="number_box1" onChange={this.onNumberChange.bind(this)}></input> </div>
                    <div>Number 2: <input type="number" className="number_box2" onChange= {this.onNumberChange2.bind(this)}></input> </div>
                </div>
                <div className="button_container">
                    <button className="calculate_button" onClick={this.onClickButton.bind(this)}>Calculate</button>
                </div>
                <div className="result_container">
                    <div className="result_div">{this.state.result}</div>
                </div>
            </div>
        )
    };
}

export default Calculator;