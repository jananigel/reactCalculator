import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            digital: '',
            symbol: '',
            tmpDigital: ''
        };

        this.onDigitalClick = this.onDigitalClick.bind(this);
        this.onSymbolClick = this.onSymbolClick.bind(this);
        this.onCleanClick = this.onCleanClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onCalculatorClick = this.onCalculatorClick.bind(this);
    };

    componentDidMount = () => {
        const symbolBtn = document.querySelectorAll('.symbol');
        const digitalBtn = document.querySelectorAll('.digital');
        symbolBtn.forEach(data => {
            data.addEventListener('click', this.onSymbolClick);
        });

        digitalBtn.forEach(data => {
            data.addEventListener('click', this.onDigitalClick);
        });
    };

    onDigitalClick = ($event) => {
        // console.log('digital click = ' + $event.target.innerHTML);
        let digital;
        if($event.target.innerHTML == '.' && this.state.digital.indexOf('.') != -1) return;
         
        this.setState({
            digital: this.state.digital + $event.target.innerHTML
        });
    };

    onSymbolClick = ($event) => {
        // console.log('symbol click = ' + $event.target.innerHTML);
        this.setState({
            tmpDigital: (this.state.tmpDigital == '' && this.state.digital != '') ? this.state.digital : this.state.tmpDigital, 
            digital: '',
            symbol: $event.target.innerHTML,       
        });
    };

    onDeleteClick = ($event) => {
        if(this.state.digital.length > 0) this.setState({digital: this.state.digital.substring(0, this.state.digital.length - 1)});
    };

    onCleanClick = () => {
        this.setState({
            digital: '',
            symbol: '',
            tmpDigital: ''
        });
    };

    onCalculatorClick = () => {
        if(this.state.tmpDigital == '') return;
        let calculator = parseFloat(this.state.tmpDigital) + this.state.symbol + parseFloat(this.state.digital);
        this.setState({
            digital: eval(calculator).toString(),
            symbol: '',
            tmpDigital: ''
        });
    };

    render() {
        return (
            <>
                <div className="calculator">
                    <div className="output">
                    <div className="tmpDigital">{this.state.tmpDigital} {this.state.symbol}</div>
                        <div className="appear">{this.state.digital}</div>
                    </div>
                    <div className="control">
                        <div className="row">
                            <div className="button" onClick={this.onCleanClick}>C</div>
                            <div className="button" onClick={this.onDeleteClick}>←</div>
                            <div className="symbol button">%</div>
                            <div className="symbol button">+</div>
                        </div>

                        <div className="row">
                            <div className="digital button">7</div>
                            <div className="digital button">8</div>
                            <div className="digital button">9</div>
                            <div className="symbol button">-</div>
                        </div>

                        <div className="row">
                            <div className="digital button">4</div>
                            <div className="digital button">5</div>
                            <div className="digital button">6</div>
                            <div className="symbol button">*</div>
                        </div>

                        <div className="row">
                            <div className="digital button">1</div>
                            <div className="digital button">2</div>
                            <div className="digital button">3</div>
                            <div className="symbol button">/</div>
                        </div>

                        <div className="row">
                            <div className="digital button">0</div>
                            <div className="digital button">00</div>
                            <div className="digital button">.</div>
                            <div className="button" onClick={this.onCalculatorClick}>=</div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default Calculator;