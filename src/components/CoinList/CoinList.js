import React, { Component } from 'react'
import { coinPricingURL } from '../../config'

export default class CoinList extends Component {
    constructor(){
        super();
        this.state = { 
            coinList: []
        };
    }

    componentDidMount(){
        const request = async () => {
            const response = await fetch(coinPricingURL)
                .then(response => response.json())
                .then((data) => 
                    this.setState({ 
                        coinList: data.slice(0, 50)
                }))
                console.log(this.state.coinList)
        }

        request();
    }

    
    

    render() {
        return (
            <div>
                {this.state.coinList.map(function(coin){
                    return(
                        <div>
                            <img src={coin.image} alt={coin.name}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
