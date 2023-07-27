let mylibrary = [];

function book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addbook() {
  event.preventDefault();

  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let bookinfo = new book(author, title, pages, read);

  mylibrary.push(bookinfo);

  displaybook();
}

function displaybook() {
  for (let i = 0; i < mylibrary.length; i++) {
    let lib = mylibrary[i];
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <h1>Book: ${lib.title}</h1>
    <p>Author: ${lib.author}</p>
    <p>Number of pages read ${lib.pages}</p>
    <p> Did the book was read? ${lib.read ? "Yes" : "No"}
    `;

    document.getElementById("result").appendChild(newDiv);
  }
}

let button = document.getElementById("submit");

button.addEventListener("click", addbook);
