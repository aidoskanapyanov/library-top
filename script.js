let myLibrary = [
  new Book((title = "Lord of the rings"), (author = "Jon Doe"), (pages = 120), (read = true)),
  new Book((title = "Tokyo drift"), (author = "Bruce Lee"), (pages = 320), (read = false)),
  new Book((title = "The Alchemist"), (author = "Joey Tribbiani"), (pages = 231), (read = true)),
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

let books = document.querySelector(".books");

myLibrary.forEach((book) => {
  let card = document.createElement("div");
  card.classList.add("book");

  let title = document.createElement("h4");
  title.innerText = book.title;
  card.appendChild(title);

  let author = document.createElement("p");
  author.innerText = `by ${book.author}`;
  card.appendChild(author);

  let pages = document.createElement("p");
  pages.innerText = `${book.pages} pages`;
  card.appendChild(pages);

  let read = document.createElement("p");
  read.innerText = book.read ? "Read" : "Not Read";
  card.appendChild(read);

  books.appendChild(card);
});
