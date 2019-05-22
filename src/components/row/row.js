import React from 'react';

const Row = ({leftItem, rightItem}) => {
    return (
        <div className="item-wrap">
            {leftItem}
            {rightItem}
        </div>
    )
}
export default Row;