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
            <div className="coinList">
                <table className="table">

                    <thead>
                        <tr className="tableHeader">
                            <th className="col-rank"> Rank </th>

                            <th> Name </th>

                            <th className="col-price"> Price </th>

                            <th className="col-24h"> 24H </th>

                            <th className="col-market"> Market Cap </th>

                            <th className="col-supply"> Circulating Supply </th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.state.coinList.map(function(coin){
                            return(
                                
                                <tr className="coinCard" key={coin.id}>
                                   
                                    <td className="coinRank"> {coin.market_cap_rank}  </td>
                                    <td className="coinNameContainer">
                                        <div className="coinItem">
                                            <a className="coinURL" href={`/currencies/${coin.name}`}>
                                            <img className="coinImage" src={coin.image} alt={coin.name}/>
                                            <div>
                                                <p className="coinName"> {coin.name} </p>
                                            </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="coinPrice"> ${String(coin.current_price).slice(0,8)} </td>
                                    <td className="coin24H" style={{color: coin.market_cap_change_percentage_24h >= 0.00 ? "#00CC00" : "#ff0000"}}> {String(coin.market_cap_change_percentage_24h).slice(0, 4)}% </td>
                                    <td className="coinMarketCap"> ${(coin.market_cap).toLocaleString()} </td>
                                    <td className="coinSupply"> {(coin.circulating_supply).toLocaleString()} {String(coin.symbol).toLocaleUpperCase()} </td>
                                   
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
