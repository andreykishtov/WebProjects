import React from 'react';

const HomesGrid = () => {
    let homes = Array(20).fill(null).map(()=><div style={{width:'100px',height:'100px',background:'black'}} />)
    return (
        <div>
         {homes}   
        </div>
    );
};

export default HomesGrid;