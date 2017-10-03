import React from 'react';
import Task from '../Task';

const List = ({ tasks }) => {
    return <div className="list">{tasks.map(({ id, title }) => <Task key={id} text={title} />)}</div>;
};

export default List;
