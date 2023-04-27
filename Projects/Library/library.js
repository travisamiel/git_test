let myLibrary = [
  {title: "Book A", author: "whocares", pages: 1, read: "no!"},
  {title: "Book B", author: "whocares", pages: 20, read: "no!"},
  {title: "Book C", author: "whocares", pages: 300, read: "no!"},
  {title: "Book D", author: "whocares", pages: 4000, read: "no!"},
];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  }
}

const shelf = document.getElementById('theshelf');

function addRemoveButton(book, addition) {
  let removeButton = document.createElement('button');
  removeButton.dataset.identifier = myLibrary.indexOf(addition);
  removeButton.textContent = 'x';
  removeButton.addEventListener('click', deleteBook);
  book.appendChild(removeButton);
}

function deleteBook() {
  let who = this.dataset.identifier;
  delete myLibrary[who];
  /*
  let deleteme = myLibrary[who];
  console.log(deleteme);
  deleteme.remove();
  */
}

//let deleteBookButton = document.querySelector('#addbooktoshelfbutton');
// deleteBookButton.

function addBookToLibrary(addition) {
  let bookSpine = `${addition.title} by ${addition.author} with ${addition.pages} pages. Have I read it? ${addition.read}`
  let theitem = document.createElement('p');
  theitem.textContent = bookSpine;
  theitem.dataset.identifier = myLibrary.indexOf(addition);
  addRemoveButton(theitem, addition);
  shelf.appendChild(theitem);
}

function buildShelf() {
  for (item of myLibrary) {
    addBookToLibrary(item);
  }
}

buildShelf();

function clearForm() {
  title.value = '';
  author.value = '';
  numberofpages.value = '';
  read.value = '';
}

function newBook() {
  let bookFromForm = new Book (title.value, author.value, numberofpages.value, read.value);
  addBookToLibrary(bookFromForm);
  myLibrary.push(bookFromForm);
  clearForm();
  event.preventDefault();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "not read yet")

function showhideadder() {
  const x = document.getElementById("newbookform");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

const addBookButton = document.querySelector('#addbooktoshelfbutton');
addBookButton.addEventListener('click', newBook);