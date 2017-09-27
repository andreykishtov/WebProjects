import React, { Component } from 'react';
export default function({handleCell,value }) {
    return <div onClick={()=>handleCell(value.id)} className="cell">{value.title}</div>
}