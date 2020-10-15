import React, { Component } from 'react';
import { coinInfoURL } from '../../../config';
import '../CurrencyPage.css';
import CurrencyTable from './CurrencyTable';
import CurrencyLinks from './CurrencyLinks';
import CurrencyAbout from './CurrencyAbout';

export default class CurrencyPage extends Component {
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
                        <p className="currency24H">{String(this.state.percentage).slice(0, 4)}%</p>
                    </div>
                </div>

                <CurrencyTable info={this.state.coinInfo}/> 
                <CurrencyLinks info={this.state.coinInfo}/>
                <CurrencyAbout info={this.state.coinInfo}/>
            </div>
        )
    }
}
