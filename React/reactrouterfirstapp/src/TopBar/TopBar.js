import React from 'react';

const componentName = ({children}) => {
    return (
        <div className="top-bar">
            <h1>{children}</h1>
        </div>
    );
};

export default componentName;