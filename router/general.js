import { Router } from 'express';
import books from "../booksdb.js";
let genl_routes = Router();


genl_routes.get('/', (req, res) => {
  return res.send(books);
});

genl_routes.get('/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  return res.send(books[isbn]);
});


genl_routes.get('/author/:author', (req, res) => {
  const author = req.params.author;
  const result = Object.values(books).filter(b => b.author === author);
  return res.send(result);
});


genl_routes.get('/title/:title', (req, res) => {
  const title = req.params.title;
  const result = Object.values(books).filter(b => b.title === title);
  return res.send(result);
});


genl_routes.get('/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  return res.send(books[isbn].reviews);
});

export const general = genl_routes;
