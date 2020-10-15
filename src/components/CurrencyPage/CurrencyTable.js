
import React, { Component } from 'react'

export default class CurrencyTable extends Component {
    constructor(props){
        super(props)
        
    }

    createTable(props){
        let marketCap = ''
        let volume = ''
        let circulatingSupply = ''
        let maxSupply = ''
        
            return(
                <div>
                    <table>
                        <tbody>
                            {Object.keys(props.info).map(function(index){
                                if(index === 'market_data'){
                                    marketCap = props.info[index].market_cap.usd
                                    volume = props.info[index].total_volume.usd
                                    circulatingSupply = props.info[index].circulating_supply
                                    maxSupply = props.info[index].total_supply // max_supply is null sometimes in the api
                                }
                            })}
                            <tr>
                                <td>${ marketCap.toLocaleString() }</td>
                                <td>${ volume.toLocaleString() }</td>
                                <td>{ circulatingSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td>
                                {this.handleTable(maxSupply)  ? <td>{ maxSupply } {String(props.info.symbol).toLocaleUpperCase()}</td> : <td></td>}
                            </tr>
                        </tbody>
                        <thead>
                            <tr className="tableHeader">
                                <th> Market Cap </th>
                                <th> Volume </th>
                                <th> Circulating Supply </th>
                                {this.handleTable(maxSupply) ? <th> Max Supply </th> : <th></th>}
                            </tr>
                        </thead>
                    </table>
                </div>
            )
    }
    handleTable = (maxSupply) => {
        if(maxSupply === null){
            return false;
        }
        else{
            return true;
        }
    }
    render() {
        return (
            <div>
                {this.createTable(this.props)}
            </div>
        )
    }
    
}




