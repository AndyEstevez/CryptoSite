import React from 'react';
import '../CurrencyLinks.css';

const CurrencyLinks = (props) => {
    
    return(
        <div className="linksList">
            {Object.keys(props.info).map(function(index){
                if(index === 'links'){
                    
                    let homePage = props.info[index].homepage[0]
                    let messageBoard = props.info[index].official_forum_url[0]
                    let sourceCode = props.info[index].repos_url.github[0]
                    
                    return(
                        <ul key={props.info.id}>
                            <li><a rel="nofollow noopener" href={homePage}>Website</a></li>
                            <li><a rel="nofollow noopener" href={messageBoard}>Message Board</a></li>
                            {handleLink(sourceCode) ? <li><a rel="nofollow noopener" href={sourceCode}>Source Code</a></li> : null}
                        </ul>
                        )
                    }
                return(null)
                }
            )}
        </div>
    )
}

function handleLink(sourceCode){
    if((sourceCode) === undefined){
        return false;
    }
    else{
        return true;
    }
}

export default CurrencyLinks;