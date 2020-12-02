import React from 'react';
import '../CurrencyAbout.css';


// getting the props from CurrencyPage.js and using it to get the description on the cryptocurrency
const CurrencyAbout = (props) => {
    return(
        <div className="currencyAbout">
            {Object.keys(props.info).map(function(index){
                {/* Looping through the prop that holds the api response results 
                and find the description section of the API  */}
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
