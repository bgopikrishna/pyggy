import { Router } from 'express';

const router = Router();

router.get('/me', (req, res) => {
    const { user } = req;

    res.send(user);
});

export default router;
