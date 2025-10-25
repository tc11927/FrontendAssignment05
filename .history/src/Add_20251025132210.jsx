import AddForm from "./Addform";
import Modal from "./Modal";
import { nanoid } from "nanoid";
import { useState } from "react";

function Add({ books, setBooks, selectedBookId, setSelectedBookId, setFilter }) {
    const [filterLanguage, setFilterLanguage] = useState("All");

    function deleteBook() {
        if (selectedBookId) {
            const newBooks = books.filter((b) => b.id !== selectedBookId);
            setBooks([...newBooks]);
            setSelectedBookId(null);
        }
    }

    function addBook(newBook) {
        setBooks([...books, newBook]);
    }

    function updateBook(updatedBook) {
        const updatedBooks = books.map((b) =>
            b.id === updatedBook.id ? updatedBook : b
        );
        setBooks(updatedBooks);
        setSelectedBookId(null);
    }

    const selectedBook = books.find((b) => b.id === selectedBookId);

    // Get unique languages for filter dropdown
    const languages = ["All", ...new Set(books.map((book) => book.language))];

    function handleFilterChange(e) {
        const selectedLanguage = e.target.value;
        setFilterLanguage(selectedLanguage);
        setFilter(selectedLanguage === "All" ? null : selectedLanguage);
    }

    return (
        <div>
            <Modal btnClassName="button" btnLabel="Add New">
                <AddForm addBook={addBook} />
            </Modal>
            <Modal btnClassName="edit" btnLabel="Edit" disabled={!selectedBookId}>
                <AddForm
                    addBook={addBook}
                    updateBook={updateBook}
                    book={selectedBook}
                />
            </Modal>
            <button
                className="x"
                onClick={deleteBook}
                disabled={!selectedBookId}
            >
                <span>Delete</span>
            </button>
            <div className="filter-control">
                <label htmlFor="language-filter">Filter by Language: </label>
                <select
                    id="language-filter"
                    value={filterLanguage}
                    onChange={handleFilterChange}
                >
                    {languages.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Add;