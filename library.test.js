const { getBookById, getBooksByAuthor } = require('./library');

describe('getBookById', () => {
  it('should return the correct book when ID exists', () => {
    expect(getBookById(1)).toEqual({ id: 1, title: '1984', author: 'George Orwell' });
    expect(getBookById(3)).toEqual({ id: 3, title: 'Brave New World', author: 'Aldous Huxley' });
  });

  it('should return null if the ID does not exist', () => {
    expect(getBookById(99)).toBeNull();
  });
});

describe('getBooksByAuthor', () => {
  it('should return all books by the given author', () => {
    const orwellBooks = getBooksByAuthor('George Orwell');
    expect(orwellBooks).toEqual([
      { id: 1, title: '1984', author: 'George Orwell' },
      { id: 2, title: 'Animal Farm', author: 'George Orwell' }
    ]);
  });

  it('should return an empty array if the author has no books', () => {
    expect(getBooksByAuthor('Unknown Author')).toEqual([]);
  });
});
