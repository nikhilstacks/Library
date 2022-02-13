//DOM
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const display = document.querySelector('.details');

//constructor
function Books(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];
const addCart = document.querySelector('.book');

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', addBookToLibrary);

//event handler for details div
function addBookToLibrary() {
  document.body.style.cssText = "background-color: peachpuff;";
  document.querySelector('.main').style.cssText = "opacity: 100%;";
  addCart.style.cssText = 'opacity: 0;';

  addBooks()
}

let newBook = 0;

//creating objects for new books
function addBooks(){

  newBook = new Books(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
  objCreate();

}
  let i = 0;
//inserting details div in the dom tree
function objCreate(){
  const div = document.createElement('div');
  div.style.cssText = 'height: 300px; width: 300px;margin: 10px;border-radius: 6px;';
  display.appendChild(div);

  const paragraph = document.createElement('p');
  paragraph.innerText = `title: ${myLibrary[i].title}`;
  div.appendChild(paragraph);  
  i++;

  reset();
}

//for reseting the value of the fields
function reset(){
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
}



const add = document.querySelector('.add');
add.addEventListener('click', oppaClass);


//opacity of the div
function oppaClass(){ 
 document.body.style.cssText = "background-color: grey;";
 document.querySelector('.main').style.cssText = "opacity: 10%;";
 addCart.style.cssText = 'opacity: 100%; display: block;';

}



