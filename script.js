function Books(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
    
}
//starting using back ticks over quotes
Books.prototype.setStars = () => {
  this.book = 'book';
};

const hobbit = new Books('hobbit', 'al da dor', 500, 'haven\'t read yet');


