import React from 'react';
import css from './TopBar.css'

export default ({children})=> {
    return(
        <div class={css["top-bar"]}>
            <h1>{children}</h1>
            <img class={css.logo} src="/static/icons/logo.svg" alt="logo"/>
        </div>
    )   
}