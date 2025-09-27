// my-app/src/controllers/userController.js
let users = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
];
let nextId = 3;

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get a single user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Create a new user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user
exports.updateUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const { name, email } = req.body;
  if (!name && !email) {
    return res.status(400).json({ message: 'No fields to update' });
  }
  users[userIndex] = { ...users[userIndex], name, email };
  res.json(users[userIndex]);
};

// Delete a user
exports.deleteUser = (req, res) => {
  const initialLength = users.length;
  users = users.filter(u => u.id !== parseInt(req.params.id));
  if (users.length === initialLength) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(204).send(); // No Content
};