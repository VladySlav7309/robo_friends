import React from 'react';

const Scroll = ( props ) => {
    return (
        <div style={{border: '1px solid black', borderWidth: '2px 0 0 0', paddingTop: '20px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;