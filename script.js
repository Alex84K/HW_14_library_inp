const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');
const library = [];

const inpIsbn = document.getElementById('isbn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const inpYear = document.getElementById('year');


addBook.onclick = function () {
    //TODO Homework Collect data from inputs,
    // create new book and add new book to library if this book unique
    if (findBook(library, inpIsbn.value) === -1 || inpIsbn.value === '') {
        let newBook = new Book(inpIsbn.value, inpTitle.value, inpAuthor.value, inpYear.value);
        library.push(newBook);
    }

    console.log(library);
    inpIsbn.value = '';
    inpTitle.value = '';
    inpAuthor.value = '';
    inpYear.value = '';
}

printBooks.onclick = function (j) {
    //TODO create ordered list, add all books from libriry
    // to list as list items. and add list to div with id = result.
    // if div with id = result not emplty, then replace its child
    // Hint: see Clock application

    while (result.firstChild) {
        result.removeChild(result.firstChild);
      }

    for (let i = 0; i < library.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(library[i].toString()));
        result.appendChild(li);
    }

    

}





function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}