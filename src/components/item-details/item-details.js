import React from 'react';
import './item-details.css';

const Record = ({item, field, label}) => {
    return (
        <li className="details__item">{label} - <span className="person-value">{item[field]}</span></li>
    );
};

export {
    Record
};

const Detail = ({item, curImg, elems}) => {
    const { name } = item;
    const currentImage = curImg;

    return (<React.Fragment>
        <div className="details__image">
            <img src={currentImage} alt={name}></img>
        </div>

        <ul className="details__list">
            {
                React.Children.map(elems, (elem) => {
                    return (
                        React.cloneElement(elem, {item})
                    )
                })
            }
        </ul>
        
        </React.Fragment>
    )
};

const ItemDetails = (props) => {
    const {data, image, children: elems} = props;
    const hadData = <Detail item={data} curImg={image} elems={elems}/>;
        
        return (
            <div className="details">
                {hadData}
            </div>
        )
}

export default ItemDetails;