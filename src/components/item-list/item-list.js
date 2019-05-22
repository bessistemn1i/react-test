import React from 'react';
import propTypes from 'prop-types';

import './item-list.css';

    const List = (props) => {
        const { data, onItemSelected, children: renderLabel } = props;
        const items = data.map((item) => {
            const {id} = item;
            const label = renderLabel(item);
            return(
                <li className="list__item"
                    onClick = { () => onItemSelected(id) }
                    key={id}>
                    {label}
                </li>
            )
        });

        return (
            <ul className="list">
                {items}
            </ul>
        )
    }
    List.propTypes = {
        onItemSelected: propTypes.func,
        data: propTypes.arrayOf(propTypes.object).isRequired,
        children: propTypes.func.isRequired
    }
export default List;