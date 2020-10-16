import React, { Component } from 'react';
import '../CurrencyTable.css';

export default class CurrencyTable extends Component {
    

    createTable(props){
        let marketCap = ''
        let volume = ''
        let circulatingSupply = ''
        let maxSupply = ''
        
            return(
                <div className="currencyTable">
                    <table>
                        <tbody>
                            {Object.keys(props.info).map(function(index){
                                if(index === 'market_data'){
                                    marketCap = props.info[index].market_cap.usd
                                    volume = props.info[index].total_volume.usd
                                    circulatingSupply = props.info[index].circulating_supply
                                    maxSupply = props.info[index].total_supply // max_supply is null sometimes in the api
                                    }
                                return(null)
                                }
                            )}
                            <tr>
                                <td className="row-mc">${ marketCap.toLocaleString() }</td>
                                <td className="row-vol">${ volume.toLocaleString() }</td>
                                <td className="row-cirSupply">{ circulatingSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td>
                                {this.handleTable(maxSupply)  ? <td className="row-max">{ maxSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td> : <td></td>}
                            </tr>
                        </tbody>
                        <thead>
                            <tr className="tableHeader">
                                <th className="col-mc"> Market Cap </th>
                                <th className="col-vol"> Volume </th>
                                <th className="col-cirSupply"> Circulating Supply </th>
                                {this.handleTable(maxSupply) ? <th className="col-max"> Max Supply </th> : <th></th>}
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




