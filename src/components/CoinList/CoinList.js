import React, { Component } from 'react'
import { coinPricingURL } from '../../config'
import './CoinList.css'

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
                <table>

                    <thead>
                        <tr>
                            <th> Rank </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> 24h </th>
                            <th> Market Cap </th>
                            <th> Circulating Supply </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.coinList.map(function(coin){
                            return(
                                <tr className="coinCard" key={coin.id}>
                                    <td className="coinRank"> {coin.market_cap_rank} </td>
                                    <td className="coinNameContainer">
                                        <div className="coinItem">
                                            <img className="coinImage" src={coin.image} alt={coin.name}/>
                                            <div>
                                                <p className="coinName"> {coin.name} </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="coinPrice"> ${String(coin.current_price).slice(0,8)} </td>
                                    <td className="coin24H"> {String(coin.market_cap_change_percentage_24h).slice(0, 4)}% </td>
                                    <td className="coinMarketCap"> {(coin.market_cap).toLocaleString()} </td>
                                    <td className="coinSupply"> {(coin.circulating_supply).toLocaleString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                  
                {/* <div>
                    {this.state.coinList.map(function(coin){
                        return(
                            <div className="coinCard" key={coin.id}>
                                
                                <div className="coinName"> {coin.name} </div>
                                <img className="coinImage" src={coin.image} alt={coin.name}/>
                                
                            </div>
                        )
                    })}
                </div> */}
                
            </div>
        )
    }
}
