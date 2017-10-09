import React from 'react';
import Search from '../Search/Search';
import HomesGrid from '../HomesGrid/HomesGrid';

const componentName = () => {
    return (
        <div>
            <Search />
            <HomesGrid />
            <aside>
            <p>1</p>
            </aside>
        </div>
    );
};

export default componentName;