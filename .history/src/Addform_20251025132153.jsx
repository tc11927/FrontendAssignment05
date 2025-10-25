import { nanoid } from "nanoid";

function AddForm({ addBook, updateBook, book, closeModal }) {
    const isEditing = !!book;
    const initialValues = isEditing
        ? book
        : {
              title: "",
              author: "",
              publisher: "",
              year: "",
              language: "",
              pages: "",
              image: "",
              price: "",
              url: "",
          };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newBook = {
            id: isEditing ? book.id : nanoid(),
            title: data.get("title"),
            author: data.get("author"),
            publisher: data.get("publisher"),
            publicationYear: data.get("year"),
            language: data.get("language"),
            pages: data.get("pages"),
            image: data.get("image"),
            price: data.get("price"),
            url: data.get("url"),
        };

        if (isEditing) {
            updateBook(newBook);
        } else {
            addBook(newBook);
        }
        e.target.reset();
        closeModal();
    };

    return (
        <div className="form-container">
            <h2 className="formtitle">{isEditing ? "Edit Book" : "Add New Book"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        defaultValue={initialValues.title}
                        placeholder="book title"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        defaultValue={initialValues.author}
                        placeholder="author"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="publisher">Publisher</label>
                    <input
                        type="text"
                        name="publisher"
                        id="publisher"
                        defaultValue={initialValues.publisher}
                        placeholder="publisher"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="year">Publication Year</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        defaultValue={initialValues.publicationYear}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="language">Language</label>
                    <input
                        type="text"
                        name="language"
                        id="language"
                        defaultValue={initialValues.language}
                        placeholder="language"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="pages">Pages</label>
                    <input
                        type="number"
                        name="pages"
                        id="pages"
                        defaultValue={initialValues.pages}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        defaultValue={initialValues.image}
                        placeholder="image URL"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        defaultValue={initialValues.price}
                        placeholder="price"
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="url">Book URL</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        defaultValue={initialValues.url}
                        placeholder="book URL"
                        required
                    />
                </div>
                <button className="save" type="submit">
                    {isEditing ? "Update" : "Save"}
                </button>
            </form>
        </div>
    );
}

export default AddForm;