import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../App";
const Cart = () => {

    const context = useContext(BooksContext)

    return (
        <div>
            <h2>
                <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
            </h2>

            <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>

            {context.state.cart.map(book => (
                <div className="book" key={book.id}>
                    <img src={book.image} alt={book.name} />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Yazar: {book.author}</p>
                        <p>Fiyat: &#8378;{book.price}</p>
                        <p>Toplam: &#8378;{book.price * book.count}</p>
                        <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
                        <button onClick={() =>
                            context.decrease(book.id)}  >-</button>

                        <button>Sepetten Çıkar</button>
                        <button onClick={() =>
                            context.increase(book.id)}  >+</button>
                    </div>
                </div>

            ))}

            {/* 
            <div className="book">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
                    alt="Simyacı"
                />
                <div>
                    <h4>Simyaci</h4>
                    <p>Yazar: Paulo Coelho</p>
                    <p>Fiyat: &#8378;19.99</p>
                    <p>Toplam: &#8378;19.99</p>
                    <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
                    <button>-</button>
                    <button>Sepetten Çıkar</button>
                    <button>+</button>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;
