import React from 'react';

function User(props){
    return(
        <>
        <div>
            <span>{props.data.name}</span><br/>
            <span>{props.data.email}</span><br/>
            <span>{props.data.add}</span><br/>
            
        </div>
        
        
        </>
    )
}

export default User ;