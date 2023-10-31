const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;


app.use(bodyParser.json());
const booksData = fs.readFileSync('books.json');
const books = JSON.parse(booksData);


app.get('/books', (req, res) => {
res.json(books);
});


app.post('/books', (req, res) => {
const newBook = req.body;
// Completa la lógica para agregar el nuevo libro a la lista de
books.push(newBook);
// y guardar la lista actualizada en 'books.json'.
fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
const bookId = req.params.id;
const updatedBook = req.body;
// Completa la lógica para actualizar el libro con el indice
books[bookId] = updatedBook;

// y guardar la lista actualizada en 'books.json'.
fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
res.json(updatedBook);
});


app.delete('/books/:id', (req, res) => {
const bookId = req.params.id;
// Completa la lógica para eliminar el libro con el ID
deletedBook = books.splice(bookId,1) 
// y guardar la lista actualizada en 'books.json'.
fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
res.json(deletedBook);
});
app.listen(port, () => {
console.log(`http://localhost:${port}`);

});
