import React from 'react';

const ImageCard = (props) => {
    console.log(props.image)
    return (
        <div className = "ui card">
            <div className = "image">
                <img src = {props.listing.image}/>
            </div>
            <div className = "content">
                <a className = "header"> {props.listing.name} </a>
                <div className = "meta">
                    <span className = "date"> {props.listing.price} </span>
                </div>
                <div className = "description">
                    {props.listing.description}
                </div>
            </div>
        </div>
    )
};

export default ImageCard;