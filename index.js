const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const books = [
    { id: 1, title: 'Book 1', description: 'Description 1', isbn: '1234567890' },
    { id: 2, title: 'Book 2', description: 'Description 2', isbn: '1234567891' },
    { id: 3, title: 'Book 3', description: 'Description 3', isbn: '1234567892' },
    { id: 4, title: 'Book 4', description: 'Description 4', isbn: '1234567893' },
    { id: 5, title: 'Book 5', description: 'Description 5', isbn: '1234567894' },
    { id: 6, title: 'Book 6', description: 'Description 6', isbn: '1234567895' },
    { id: 7, title: 'Book 7', description: 'Description 7', isbn: '1234567896' },
    { id: 8, title: 'Book 8', description: 'Description 8', isbn: '1234567897' },
    { id: 9, title: 'Book 9', description: 'Description 9', isbn: '1234567898' },
    { id: 10, title: 'Book 10', description: 'Description 10', isbn: '1234567899' },
    { id: 11, title: 'Book 11', description: 'Description 11', isbn: '1234567800' },
    { id: 12, title: 'Book 12', description: 'Description 12', isbn: '1234567801' },
    { id: 13, title: 'Book 13', description: 'Description 13', isbn: '1234567802' },
    { id: 14, title: 'Book 14', description: 'Description 14', isbn: '1234567803' },
    { id: 15, title: 'Book 15', description: 'Description 15', isbn: '1234567804' },
    { id: 16, title: 'Book 16', description: 'Description 16', isbn: '1234567805' },
    { id: 17, title: 'Book 17', description: 'Description 17', isbn: '1234567806' },
    { id: 18, title: 'Book 18', description: 'Description 18', isbn: '1234567807' },
    { id: 19, title: 'Book 19', description: 'Description 19', isbn: '1234567808' },
    { id: 20, title: 'Book 20', description: 'Description 20', isbn: '1234567809' }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});