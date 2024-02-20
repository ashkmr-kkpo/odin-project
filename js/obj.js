const myLibrary = []

let book1 = new Book("book1", "me", 30, false);
let book2 = new Book("book2", "me", -10, false);
let book3 = new Book("book3", "ame", -10, false);

function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function()
    {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead ? 'read': 'not read yet'}`;
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)

for (let book of myLibrary)
{
  console.log(book.info());
}