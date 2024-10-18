import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
  deleteAllContacts
} from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/', createContact);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.put('/:id', updateContactById);
router.delete('/:id', deleteContactById);
router.delete('/', deleteAllContacts);

export default router;
