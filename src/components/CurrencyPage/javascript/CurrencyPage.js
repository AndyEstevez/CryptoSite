import React, { Component } from 'react';
import { coinInfoURL } from '../../../config';
import '../CurrencyPage.css';
import CurrencyTable from './CurrencyTable';
import CurrencyLinks from './CurrencyLinks';
import CurrencyAbout from './CurrencyAbout';

export default class CurrencyPage extends Component {
    // 
    constructor(props) {
        super(props);
        this.state = ({
            coinID: props.match.params,
            coinInfo: [],
            image: '',
            price: [],
            percentage: []
        })
    }
    
    // API request for the specific cryptocurrency from the params in the url
    componentDidMount(){
        const request = () => {
            fetch(`${coinInfoURL}${String(this.state.coinID.id).toLocaleLowerCase()}`)
                .then(response => response.json())
                .then((data) => 
                    this.setState({ 
                        coinInfo: data,
                        image: data.image,
                        price: data.market_data.current_price,
                        percentage: data.market_data.price_change_percentage_24h
                }))
        }

        request();
    }

    render() {
        const coinInfo = this.state.coinInfo
        
        return (
            // displaying the image, name, price of coin & rendering components to handle other info
            <div className="currencyPage" key={coinInfo.id}>
                <div className="currencyBasic">
                    <div className="currencyNameImg">
                        <img className="currencyImg" src={`${this.state.image.small}`} alt={coinInfo.name}/>
                        <div>
                            <p className="currencyName"> {coinInfo.name} </p>
                        </div>
                    </div>

                    <div className="currencyPrice24H">
                        <p className="currencyPrice">${this.state.price.usd}</p>
                        <p className="currency24H"  style={{color: this.state.percentage >= 0.00 ? "#00CC00" : "#ff0000"}}>({String(this.state.percentage).slice(0, 4)}%)</p>
                    </div>
                </div>
                {/* send the reponse results from the API request as a prop to handle other information */}
                <CurrencyTable info={this.state.coinInfo}/> 
                <CurrencyLinks info={this.state.coinInfo}/>
                <CurrencyAbout info={this.state.coinInfo}/>
            </div>
        )
    }
}
