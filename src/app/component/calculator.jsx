import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: null,
            symbol: ''
        };

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSymbolClick = this.onSymbolClick.bind(this);
        this.onCleanClick = this.onCleanClick.bind(this);
    };

    onDigitalClick = () => {

    };

    onSymbolClick = () => {

    };

    onCleanClick = () => {
        console.log(123);
    };

    render() {
        return (
            <>
                <div className="calculator">
                    <div className="output">
                        <div className="appear"></div>
                    </div>
                    <div className="control">
                        <div className="row">
                            <div className="button" onClick={this.onCleanClick}>C</div>
                            <div className="button">←</div>
                            <div className="button">%</div>
                            <div className="button">+</div>
                        </div>

                        <div className="row">
                            <div className="button">7</div>
                            <div className="button">8</div>
                            <div className="button">9</div>
                            <div className="button">-</div>
                        </div>

                        <div className="row">
                            <div className="button">4</div>
                            <div className="button">5</div>
                            <div className="button">6</div>
                            <div className="button">*</div>
                        </div>

                        <div className="row">
                            <div className="button">1</div>
                            <div className="button">2</div>
                            <div className="button">3</div>
                            <div className="button">/</div>
                        </div>

                        <div className="row">
                            <div className="button">0</div>
                            <div className="button">00</div>
                            <div className="button">.</div>
                            <div className="button">=</div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
};

export default Calculator;