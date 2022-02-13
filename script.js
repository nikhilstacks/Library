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

const add = document.querySelector('.add');
add.addEventListener('click', oppaClass);

const addCart = document.querySelector('.book');

function oppaClass(){ 
 document.body.style.cssText = "background-color: grey;";
 document.querySelector('.main').style.cssText = "opacity: 30%;";
 addCart.style.cssText = 'opacity: 100%;';
}

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', defaultStyle);

function defaultStyle(){
 document.body.style.cssText = "background-color: peachpuff;";
 document.querySelector('.main').style.cssText = "opacity: 100%;";
 addCart.style.cssText = 'opacity: 0;';
}
