import { nanoid } from "nanoid";

function AddForm({ addBook, closeModal }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newBook = {
            id: nanoid(),
            title: data.get("title"),
            publisher: data.get("publisher"),
            image: data.get("image"),
        };
        addBook(newBook);
        e.target.reset();
        closeModal();
    };

    return (
        <div className="form-container">
            <h2 className="formtitle">Add new book!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="pr-name">Title</label>
                    <input
                        type="text"
                        name="pr-name"
                        placeholder="book title"
                    />
                </div>
                <div className="form-control">
                    <label htmlForm="pr-desc">Author</label>
                    <input
                        type="text"
                        name="pr-desc"
                        placeholder="author"
                    />
                </div>
                <div className="form-control">
                    <label htmlForm="pr-desc">Publisher</label>
                    <input
                        type="text"
                        name="pr-desc"
                        placeholder="publisher"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="pr-price">Publication Year</label>
                    <input
                        type="number"
                        name="pr-price"
                    />
                </div>
                <div className="form-control">
                    <label htmlForm="pr-desc">Language</label>
                    <input
                        type="text"
                        name="pr-desc"
                        placeholder="language"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="pr-price">Pages</label>
                    <input
                        type="number"
                        name="pr-price"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="url"
                        name="image"
                        placeholder="image URL"
                    />
                </div>
                <button className="save">Save</button>
            </form>
        </div>
    );
}

export default AddForm;
