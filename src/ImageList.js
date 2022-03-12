import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const imageList = props.listings.map(listing => {
        return <ImageCard key = {listing._id} listing = {listing}/>
    })
    return <div> {imageList} </div>
};

export default ImageList;