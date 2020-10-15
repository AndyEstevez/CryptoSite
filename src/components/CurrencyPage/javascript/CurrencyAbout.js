import React from 'react';
import '../CurrencyAbout.css';

const CurrencyAbout = (props) => {
    return(
        <div className="currencyAbout">
            {Object.keys(props.info).map(function(index){
                if(index === 'description'){
                    let about = props.info[index].en;
                    var regexAbout = about.replace(/<[^>]+>/g, '');

                    return(
                        <div key={props.info.id}>
                        <h2>About {props.info.name} </h2>
                        <p>{regexAbout}</p>
                        </div>
                    )
                }
                return(null)

            })}
            
        </div>
    )
}
    
export default CurrencyAbout;
