let bookList = document.getElementById("bookList");
let name = document.getElementById("name")
let author = document.getElementById("author")
let pageSize = document.getElementById("pageSize")
let publication = document.getElementById("publication")
let price = document.getElementById("price")
document.getElementsByTagName("form")[0].addEventListener("submit", addBook)

function addBook(event) {
    event.preventDefault();
    let book = {
        name: name.value,
        author: author.value,
        pageSize: pageSize.value,
        publication: publication.value,
        price: price.value,
    }
   fetch('BooksServlet', {
        method: "POST",
        body: JSON.stringify(book)
    });
    createBook(book)
}

function createBook(book) {
    let bookInfo = document.createElement("div");
    let bookBody = document.createElement("div");
    bookBody.classList.add("card-body");
    let bookName = document.createElement("h3");
    bookName.textContent = `${book.name}`;
    let bookAuthor = document.createElement("h3");
    bookAuthor.textContent = `${book.author}`;
    let bookPageSize = document.createElement("h4");
    bookPageSize.textContent = `Объем: ${book.pageSize} c.`;
    let bookPublication = document.createElement("h4");
    bookPublication.textContent = `Издание: ${book.publication}`;
    let bookPrice = document.createElement("h4")
    bookPrice.textContent = `цена: ${book.price} р.`;
    bookBody.append(bookName)
    bookBody.append(bookAuthor)
    bookBody.append(bookPageSize)
    bookBody.append(bookPublication)
    bookBody.append(bookPrice)
    bookInfo.append(bookBody)
    bookList.insertBefore(bookInfo, bookList.firstChild)
}

async function BooksUpload() {
    let response = await fetch('BooksServlet')
    let books = await response.json()
    for (let book of books) {
        createBook(book)
    }
}
BooksUpload();