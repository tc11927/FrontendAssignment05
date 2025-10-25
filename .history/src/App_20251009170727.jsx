import Book from "./Book";
import Add from "./Add";
import Banner from "./Banner";
import { useState } from "react";
import data from "../data/books.json";

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

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
                        />
                        <div className="bookgrid">
                            {" "}
                            {books.map((book) => (
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
