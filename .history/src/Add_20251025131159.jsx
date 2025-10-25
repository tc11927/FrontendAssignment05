import AddForm from "./Addform";
import Modal from "./Modal";
import { nanoid } from "nanoid";

function Add({ books, setBooks, selectedBookId, setSelectedBookId }) {
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

    return (
        <div>
            <Modal
                btnClassName="button"
                btnLabel="Add New">
                <AddForm addBook={addBook} />
            </Modal>
            <button className="edit">
                Edit
                <AddForm
                    book={selectedBook}
                    updateBook={updateBook}
                />
            </button>
            <button
                className="x"
                onClick={deleteBook}
                disabled={!selectedBookId}>
                <span>Delete</span>
            </button>
        </div>
    );
}

export default Add;
