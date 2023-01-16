let myLibrary = JSON.parse(localStorage.getItem("myLibrary"));

if (!myLibrary) {
  myLibrary = [];
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

let books = document.querySelector(".books");

function displayBooks() {
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
}
displayBooks();

let modal = document.getElementById("myModal");
let bookBtn = document.getElementById("bookBtn");
let closeBtn = document.getElementsByClassName("close")[0];
let submitBtn = document.getElementById("submitBtn");

bookBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

submitBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let book = new Book(
    (title = data.get("title")),
    (author = data.get("author")),
    (pages = data.get("pages")),
    (read = data.get("read") == "true" ? true : false)
  );
  addBookToLibrary(book);
  books.innerHTML = "";
  displayBooks();
});
