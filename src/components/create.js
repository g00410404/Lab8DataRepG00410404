// Importing necessary React hooks and Axios for making HTTP requests
import { useState } from "react";
import axios from "axios";

// Functional component for creating a new book
function Create() {
// State variables to store the input values
const [title, setTitle] = useState('');
const [cover, setCover] = useState('');
const [author, setAuthor] = useState('');

// Handling form submission
const handleSubmit = (e) => {
    e.preventDefault();

    // Logging the book details to the console (for demonstration purposes)
    console.log("Title: " + title +
        " Cover: " + cover +
        " Author: " + author);

    // Creating a new book object with the input values
    const book = {
        title: title,
        cover: cover,
        author: author
    };

    // Making a POST request to add a new book
    axios.post('http://localhost:4000/api/book', book)
    .then()
    .catch();
}

return (
    <div>
        {/* Displaying a heading for the create component */}
        <h2>Hello from Create Component!</h2>
        {/* Form for adding a new book */}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add Book Title: </label>
                {/* Input for entering the book title */}
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Book Cover: </label>
                {/* Input for entering the book cover */}
                <input
                    type="text"
                    className="form-control"
                    value={cover}
                    onChange={(e) => { setCover(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Add Book Author: </label>
                {/* Input for entering the book author */}
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                />
            </div>
            <div>
                {/* Submit button for adding a new book */}
                <input type="submit" value="Add Book" />
            </div>
        </form>
    </div>
);
}

// Exporting the Create component as the default export
export default Create;
