import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";


const Products = props => {
    const context = useContext(BooksContext)
    console.log(context)
    return (
        <div>
            <h2>
                <span>Kitap Listesi</span>
                <Link to="/cart">Sepetim</Link>
            </h2>
            {context.bookList.map(book => (
                <div className="book" key={book.id}>
                    <img src={book.image} alt={book.name} />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Yazar: {book.author}</p>
                        <p>Fiyat: &#8378;{book.price}</p>
                        <button>Sepete Ekle</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
