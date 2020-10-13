import React, { Component } from 'react';
import { coinInfoURL } from '../../config';
import CurrencyTable from './CurrencyTable';

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
        const request = async () => {
            const response = await fetch(`${coinInfoURL}${String(this.state.coinID.id).toLocaleLowerCase()}`)
                .then(response => response.json())
                .then((data) => 
                    this.setState({ 
                        coinInfo: data,
                        image: data.image,
                        price: data.market_data.current_price,
                        percentage: data.market_data.price_change_percentage_24h
                }))
                 console.log(this.state.coinInfo)
        }

        request();
    }

   

    render() {
        const coinInfo = this.state.coinInfo
        
        return (
            <div key={coinInfo.id}>
                <div>
                    <div className="currencyNameImg">
                        <img className="currencyImg" src={this.state.image.small} alt={coinInfo.name}/>
                        <div>
                            <p className="currencyName"> {coinInfo.name} </p>
                        </div>
                    </div>

                    <div>
                        <p>{this.state.price.usd}</p>
                        <p>{String(this.state.percentage).slice(0, 4)}</p>
                    </div>
                </div>

                <CurrencyTable info={this.state.coinInfo}/> 
            </div>
        )
    }
}
