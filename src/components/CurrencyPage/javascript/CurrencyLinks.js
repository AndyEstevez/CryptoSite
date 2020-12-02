import React from 'react';
import '../CurrencyLinks.css';
import { FiLink } from 'react-icons/fi';
import { TiMessages } from 'react-icons/ti';
import { FaRegFileCode } from 'react-icons/fa';


// getting the props from CurrencyPage.js and using it to get the links for the cryptocurrency
const CurrencyLinks = (props) => {
    
    return(
        <div className="linksList">
            {Object.keys(props.info).map(function(index){
                {/* Looping through the api response results and finding the index holding the urls
                for the message board, source code, and personal site for the cryptocurrency */}
                if(index === 'links'){
                    
                    let homePage = props.info[index].homepage[0]
                    let messageBoard = props.info[index].official_forum_url[0]
                    let sourceCode = props.info[index].repos_url.github[0]
                    
                    return(
                        <ul  key={props.info.id}>
                            <li><FiLink className="logo"></FiLink><a rel="nofollow noopener" href={homePage}>Website</a></li>
                            <li className="li-forum"><TiMessages className="logo"></TiMessages><a rel="nofollow noopener" href={messageBoard}>Message Board</a></li>
                            {/* Conditional render to check if the cryptocurrency has a source code*/}
                            {handleLink(sourceCode) ? <li className="li-code"><FaRegFileCode className="logo"></FaRegFileCode><a rel="nofollow noopener" href={sourceCode}>Source Code</a></li> : null}
                        </ul>
                        )
                    }
                return(null)
                }
            )}
        </div>
    )
}

// function to check if the cryptocurrency's data has a source code url
function handleLink(sourceCode){
    if((sourceCode) === undefined){
        return false;
    }
    else{
        return true;
    }
}

export default CurrencyLinks;