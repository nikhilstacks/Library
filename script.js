function Books(title, author, pages, read){
  this.title = 'fuckkkkkkkkkk i m ginius';
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//starting using back ticks over quotes
Books.prototype.setStars = () => {
  this.book = 'book';
};

const hobbit = new Books('hobbit', 'al da dor', 500, 'haven\'t read yet');
const malawa = new Books('malwa', 'nolan', 233, 'read');

console.log(hobbit);

hobbit.setStars();

console.log(malawa);

console.log(Books.prototype);


function Student() {
  this.student = 'nikhil';
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
console.log(carl.grade); // 8
