import express from 'express';
import { addSupporters, getSupporter } from '../controllers/supportersControllers.js';

const router = express.Router();

router.post('/supporters', addSupporters)
router.get('/listsup', getSupporter)

export default router 