import React from 'react';


let marketCap = ''
let volume = ''
let circulatingSupply = ''
let maxSupply = ''


const CurrencyTable = (props) => {

    return(
        <div>
            <table>
                <thead>
                    <tr className="tableHeader">
                        <th> Market Cap </th>
                        <th> Volume </th>
                        <th> Circulating Supply </th>
                        <th> Max Supply </th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(props.info).map(function(index){
                        if(index === 'market_data'){
                            marketCap = props.info[index].market_cap.usd
                            volume = props.info[index].total_volume.usd
                            circulatingSupply = props.info[index].circulating_supply
                            maxSupply = props.info[index].max_supply

                            return(
                                <tr>
                                    <td>${ marketCap.toLocaleString() }</td>
                                    <td>${ volume.toLocaleString() }</td>
                                    <td>{ circulatingSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td>
                                    <td>{ maxSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyTable;