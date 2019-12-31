import React from 'react';
import './BookItem.css';

export default function BookItem (props) {
    let price = null;
    if (props.saleInfo.saleability === "NOT_FOR_SALE") {
        price = "No Price Available";
    } else if (props.saleInfo.saleability === "FREE") {
        price = "Free";
    } else {
        price = '$' + props.saleInfo.retailPrice.amount;
    }

    let image = null;
    if(props.volumeInfo.imageLinks === undefined) {
        return image;
    } else {
        let altText = "Cover of " + props.volumeInfo.title;
        image = <img src={props.volumeInfo.imageLinks.thumbnail} alt= {altText} />
    };

    let author = null;
    if(!props.volumeInfo.authors) {
        author = props.volumeInfo.publisher;
    } else {
        author = props.volumeInfo.authors[0];
    }

    
    return (
        <div className="book-item">
            {image}
            <div className="book-description">
                <a href={props.volumeInfo.infoLink}><h2>{props.volumeInfo.title}</h2></a>
                <h3>Author: {author}</h3>
                <h3>Price: {price}</h3>
                <p>{props.volumeInfo.description}</p>
            </div>
        </div>
    )
}