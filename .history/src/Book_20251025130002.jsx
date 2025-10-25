import { useState } from "react";

function Book({ book, setSelectedBookId, selectedBookId }) {
    const [darkened, setDarkened] = useState(false);

    if (darkened && selectedBookId !== book.id) {
        setDarkened(false);
    }

    function handleClick() {
        setDarkened((prev) => {
            const newDarkened = !prev;
            setSelectedBookId(newDarkened ? book.id : null);
            return newDarkened;
        });
    }

    return (
        <div
            className={`book ${darkened ? "darkened" : ""}`}
            onClick={handleClick}
             key={book.id>
            <img
                className="bookimg"
                src={book.image}
                alt={book.title}
            />
            <div className="price">
                <h4>{book.price}</h4>
                <p></p>
            </div>
            <div className="learn">
                <a
                    href={book.url}
                    className="link"
                    target="_blank"
                    rel="noreferrer">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Book;
