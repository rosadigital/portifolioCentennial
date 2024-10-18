import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  deleteAllUsers
} from '../controllers/user.controller.js';

const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to get all users
router.get('/', getAllUsers);

// Route to get a specific user by ID
router.get('/:id', getUserById);

// Route to update a user by ID
router.put('/:id', updateUserById);

// Route to delete a specific user by ID
router.delete('/:id', deleteUserById);

// Route to delete all users
router.delete('/', deleteAllUsers);

export default router;
