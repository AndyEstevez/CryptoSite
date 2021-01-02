import React, { Component } from 'react'
import { coinPricingURL } from '../../config'
import './CoinList.css'
//import axios from 'axios'


export default class CoinList extends Component {
    constructor(){
        super();
        this.state = { 
            coinList: [],
        };
    }

    // API request to get cryptocurrencies by rank through total market cap
    // and set the state object 'coinList' to the top 50 of the response results 
    componentDidMount(){
        const request = () => {
            fetch(coinPricingURL)
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
                {/* Creating the table header and labeled based on from API data */}
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
                        {/* Looping through the state object 'coinList' 
                        // and create a table row for each cryptocurrency that display: name, rank, price, image, market cap, circulating supply*/}
                        {this.state.coinList.map(function(coin){
                            return(
                                <tr className="coinCard" key={coin.id}>
                                    <td className="coinRank"> {coin.market_cap_rank}  </td>
                                    <td className="coinNameContainer">
                                        <a className="coinURL" href={`/currencies/${coin.id}`}>
                                            <img className="coinImg" src={coin.image} alt={coin.name}/>
                                            {coin.name} 
                                        </a>
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
