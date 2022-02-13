function Books(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];

function addBookToLibrary() {
  document.body.style.cssText = "background-color: peachpuff;";
  document.querySelector('.main').style.cssText = "opacity: 100%;";
  addCart.style.cssText = 'opacity: 0;';


  let title = document.querySelector('#title');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');
  let read = document.querySelector('#read');

  
  let newBook = new Books(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
}

const add = document.querySelector('.add');
add.addEventListener('click', oppaClass);

const addCart = document.querySelector('.book');

function oppaClass(){ 
 document.body.style.cssText = "background-color: grey;";
 document.querySelector('.main').style.cssText = "opacity: 10%;";
 addCart.style.cssText = 'opacity: 100%;';
}

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', addBookToLibrary);

console.log(myLibrary);