//DOM
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const display = document.querySelector('.details');
const error = document.querySelector('.error');

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
  if(title.value != '' && author.value != '' && pages.value != '' && read.value != '')
  {
  newBook = new Books(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
  objCreate();
  }
  else {
    error.style.cssText = 'color: red;'
    error.innerText = 'Not valid values';
    reset();
  }
}
  let i = 0;
//inserting details div in the dom tree
function objCreate(){
  
  
    const div = document.createElement('div');
    div.style.cssText = 'height: auto; width: 300px;margin: 10px;border-radius: 6px;border: 1px solid brown; box-shadow: 4px 4px 4px pink;';

    const paragraph = document.createElement('p');
    paragraph.style.cssText = 'padding-left:24px;font-family: "Oswald", sans-serif;font-size:2.5rem;'
    paragraph.innerHTML = `title: ${myLibrary[i].title} <br>
                           author: ${myLibrary[i].author} <br>
                           pages: ${myLibrary[i].pages} <br>
                           read: ${myLibrary[i].read} <br>`;
    const deleteBook = document.createElement('button');
    deleteBook.style.cssText = 'background-color: white;border-radius:4px;'
    deleteBook.classList = 'delete';
    deleteBook.innerText = '❌';
    deleteBook.addEventListener('click', deleteRecord);


    display.appendChild(div);                      
    error.innerText = '';
    div.appendChild(deleteBook);
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
 addCart.style.cssText = 'opacity: 100%; visibility: visible;';

}


//function for deleting a record
function deleteRecord(){
   
}

