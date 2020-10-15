import React from 'react';

const CurrencyLinks = (props) => {
    
    return(
        <div>
            {Object.keys(props.info).map(function(index){
                if(index === 'links'){
                    
                    let homePage = props.info[index].homepage[0]
                    let messageBoard = props.info[index].official_forum_url[0]
                    let sourceCode = props.info[index].repos_url.github[0]
                    
                    return(
                        <ul>
                            <li><a rel="nofollow noopener" href={homePage}>Website</a></li>
                            <li><a rel="nofollow noopener" href={messageBoard}>Message Board</a></li>
                            {handleLink(sourceCode) ? <li><a rel="nofollow noopener" href={sourceCode}>Source Code</a></li> : <div></div>}
                        </ul>
                    )
                }
            })}
        </div>
    )
}

function handleLink(sourceCode){
    console.log(sourceCode)
    if((sourceCode) === undefined){
        return false;
    }
    else{
        return true;
    }
}

export default CurrencyLinks;