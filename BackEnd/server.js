// Importing required modules and setting up the Express app
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Adding CORS middleware to handle cross-origin requests
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Adding body-parser middleware to parse request bodies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14?retryWrites=true&w=majority');
}

// Defining a Mongoose schema for books
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

// Creating a Mongoose model for books
const bookModel = mongoose.model('my_books', bookSchema);

// Handling PUT requests to update a book by ID
app.put('/api/book/:id', async(req, res) => {
  console.log("Update: " + req.params.id);
  // Finding and updating the book by ID
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
});

// Handling POST requests to create a new book
app.post('/api/book', (req, res) => {
  console.log(req.body);
  // Creating a new book using the data from the request body
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })
  .then(() => { res.send("Book Created") })
  .catch(() => { res.send("Book NOT Created") });
});

// Handling GET requests for all books
app.get('/api/books', async(req, res) => {
  // Retrieving all books from the database
  let books = await bookModel.find({});
  res.json(books);
});

// Handling GET requests for a specific book by ID
app.get('/api/book/:identifier', async (req, res) => {
  console.log(req.params.identifier);
  // Finding a book by ID
  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
});

// Setting up a basic route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Starting the Express app and listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
