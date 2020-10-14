import React, { useState } from 'react';

const CurrencyTable = (props) => {

    let marketCap = ''
    let volume = ''
    let circulatingSupply = ''
    let maxSupply = ''
    const [max, setMax] = useState(true)

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
                            if(maxSupply == null){
                                setMax(false)
                                console.log(max)
                            }
                            console.log(max)

                        }
                    })}
                    <tr>
                        <td>${ marketCap.toLocaleString() }</td>
                        <td>${ volume.toLocaleString() }</td>
                        <td>{ circulatingSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td>
                        {max ? <td>{ maxSupply.toLocaleString() } {String(props.info.symbol).toLocaleUpperCase()}</td> : <td></td>}
                    </tr>
                </tbody>
                <thead>
                    <tr className="tableHeader">
                        <th> Market Cap </th>
                        <th> Volume </th>
                        <th> Circulating Supply </th>
                        {max ? <th> Max Supply </th> : <th></th>}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default CurrencyTable;