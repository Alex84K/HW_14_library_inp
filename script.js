const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');
const library = [];

const inpIsbn = document.getElementById('isbn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const inpYear = document.getElementById('year');


addBook.onclick = function () {
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

printBooks.onclick = function () {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    for (let i = 0; i < library.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(library[i].toString()));
        result.appendChild(li);
    }


    let n = maxYearOfPublishing(library);
    let oldYear = document.getElementById('old');
    oldYear.appendChild(document.createTextNode(`Oldest edition  -  ${n}`));

    let m = minYearOfPublishing(library);
    let newYear = document.getElementById('new');

    newYear.appendChild(document.createTextNode(`Latest edition  -  ${m}`));
}

function maxYearOfPublishing(library) {
    const maxIndex = library.reduce((res, currentBook, currentIndex, array) => {
        if (currentBook.year > array[res].year) {
            return currentIndex;
        }
        return res;
    }, 0);
    return library[maxIndex];
}

function minYearOfPublishing(library) {
    const minIndex = library.reduce((res, currentBook, currentIndex, array) => {
        if (currentBook.year < array[res].year) {
            return currentIndex;
        }
        return res;
    }, 0);
    return library[minIndex];
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