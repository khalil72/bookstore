import get  from 'axios';

async function getAllBooks() {
  try {
    const response = await get("http://localhost:5000/");
    console.log("All Books:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}


function getBookByISBN(isbn) {
  get(`http://localhost:5000/isbn/${isbn}`)
    .then(res => console.log("Book by ISBN:", res.data))
    .catch(err => console.error(err.message));
}


async function getBooksByAuthor(author) {
  try {
    const response = await get(`http://localhost:5000/author/${author}`);
    console.log("Books by Author:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}


async function getBooksByTitle(title) {
  try {
    const response = await get(`http://localhost:5000/title/${title}`);
    console.log("Books by Title:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}


getAllBooks();
getBookByISBN("9780001");
getBooksByAuthor("George Orwell");
getBooksByTitle("1984");
