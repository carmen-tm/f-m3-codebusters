import React from 'react';


class PanelColors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            palette: 0,
            color: 'card-user card__container ',
        }
        this.handlerChangeColor = this.handlerChangeColor.bind(this);
    }
    handlerChangeColor(event) {
        const inputValue = event.currentTarget.value;
        this.setState(prevState => {
           console.log(prevState.palette)
        })
    }
    render() {
        return (
            <section id="section-design" className="design panel">
                <p className="section__title">Colors</p>
                <div className="options__container">
                    <div className="option__container">
                        <label for="palette--blue-green"></label>
                        <input onChange={this.handlerChangeColor} id="palette--blue-green" type="radio" checked value="1" name="colors" />
                        <div className="palette__container">
                            <div className="sample-color blue-green--1"></div>
                            <div className="sample-color blue-green--2"></div>
                            <div className="sample-color blue-green--3"></div>
                        </div>

                    </div>
                    <div className="option__container">
                        <label for="palette--red-orange"></label>
                        <input onChange={this.handlerChangeColor} id="palette--red-orange" type="radio" value="2" name="colors" />
                        <div className="palette__container">
                            <div className="sample-color red-orange--1"></div>
                            <div className="sample-color red-orange--2"></div>
                            <div className="sample-color red-orange--3"></div>
                        </div>

                    </div>
                    <div className="option__container">
                        <label for="palette--blue-gray"></label>
                        <input onChange={this.handlerChangeColor} id="palette--blue-gray" type="radio" value="3" name="colors" />
                        <div className="palette__container">
                            <div className="sample-color blue-gray--1"></div>
                            <div className="sample-color blue-gray--2"></div>
                            <div className="sample-color blue-gray--3"></div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

}



export default PanelColors;