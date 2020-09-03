import React from 'react';

function FuntionClick(){
    function clickHandler(){
        console.log("Button clicked");
    }
    return(
        <div>
            <button onClick={clickHandler()}>click here</button>
        </div>
    );
}
export default FuntionClick;