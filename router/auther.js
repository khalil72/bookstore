import { Router } from 'express';
let users = [];
import books from "../booksdb.js";
let authenticated = Router();


authenticated.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  return res.json({ message: "User registered successfully" });
});


authenticated.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  return res.json({ message: `Welcome ${username}` });
});

authenticated.put('/auth/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  const isbn = req.params.isbn;
  books[isbn].reviews[username] = review;
  return res.json({ message: "Review added/modified successfully" });
});


authenticated.delete('/auth/review/:isbn', (req, res) => {
  const { username } = req.body;
  const isbn = req.params.isbn;
  delete books[isbn].reviews[username];
  return res.json({ message: "Review deleted successfully" });
});

const _authenticated = authenticated;
export { _authenticated as authenticated };
