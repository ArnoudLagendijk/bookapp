document.addEventListener('DOMContentLoaded', main)

// Book Class

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;  
        this.isbn = isbn;
    }
}


// UI Class

class UI {
    static displayBooks() {
    const StoredBooks = [
        {
            title  : 'Alien',
            author : 'John Doe',
            isbn   : '23133434244'
        },
        {
            title  : 'Alan Poe',
            author : 'Jane Doe',
            isbn   : '2313377628634'
        }
    ] 
    
    const books = StoredBooks;
    
    books.forEach((book) => UI.addBookToList(book))

    }

    static addBookToList(book) {
        // let book_list = document.getElementById('booklist');
        const book_list = document.querySelector('#booklist')
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        book_list.appendChild(row);
    }

    static deleteBook(el) {
        el.parentElement.parentElement.remove();

    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
    }

    static clearField() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';        
    }
}



function main() {

// Get HTML parts
const bookform = document.getElementById('bookform');
const booklist = document.getElementById('booklist');

// Events: Display book
UI.displayBooks()    

// Event; Add a Book

bookform.addEventListener('submit', (e) => {
    e.preventDefault();
    const title  = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn   = document.getElementById('isbn').value;

    if (!title || !author || !isbn) {
        alert('Please fill in all fields')
    } else {
        const book = new Book(title, author, isbn)
        UI.addBookToList(book);
        UI.clearField();
    }


})

booklist.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('delete')) {
        UI.deleteBook(el);
    }

})



// Event: store book

// Event: remove book

} // end main


