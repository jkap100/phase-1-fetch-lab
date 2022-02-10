const url = "https://anapioficeandfire.com/api/books";

function fetchBooks(render) {
  // To pass the tests, don't forget to return your fetch!
  return fetch(url)
    .then((r) => r.json())
    .then((render) => renderBooks(render));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
