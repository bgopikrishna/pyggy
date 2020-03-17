import { Router } from 'express';
import { signInUser, signUpUser } from '../../controllers/auth.controller';

const router = Router();

router.post('/signin', signInUser);
router.post('/signup', signUpUser);

export default router;
