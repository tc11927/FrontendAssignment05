import Book from "./Book";
import Add from "./Add";
import Banner from "./Banner";
import { useState, useEffect } from "react";

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [filter, setFilter] = useState(null);

    // Load books from localStorage on mount
    useEffect(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    // Save books to localStorage whenever books change
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    // Filter books based on language
    const filteredBooks = filter
        ? books.filter((book) => book.language === filter)
        : books;

    return (
        <div>
            <div className="header">
                <Banner text="Book Catalog" />
            </div>
            <div className="app">
                <div className="content">
                    <div className="items">
                        <Add
                            books={books}
                            setBooks={setBooks}
                            selectedBookId={selectedBookId}
                            setSelectedBookId={setSelectedBookId}
                            setFilter={setFilter}
                        />
                        <div className="bookgrid">
                            {filteredBooks.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    setSelectedBookId={setSelectedBookId}
                                    selectedBookId={selectedBookId}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Banner text="© Thea Calaquian, 2025" />
                </div>
            </div>
        </div>
    );
}

export default App;