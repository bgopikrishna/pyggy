import { Router } from 'express';
import { User } from '../../models/User/user.model';

const router = Router();

router.get('/me', async (req, res) => {
    const { user } = req;

    try {
        const userDetails = await User.findById(user.id).select({ name: 1, email: 1 });
        res.send(userDetails);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

export default router;
