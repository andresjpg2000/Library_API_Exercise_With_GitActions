const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'Animal Farm', author: 'George Orwell' },
  { id: 3, title: 'Brave New World', author: 'Aldous Huxley' }
];

function getBookById(id) {
  return books.find(book => book.id === id) || null;
}

function getBooksByAuthor(author) {
  return books.filter(book => book.author === author);
}

module.exports = { getBookById, getBooksByAuthor };
