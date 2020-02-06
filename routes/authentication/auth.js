import { Router } from 'express'
import { signInUser, signUpUser } from '../../controllers/auth'

const router = Router()

router.post('/signin', signInUser)
router.post('/signup', signUpUser)
