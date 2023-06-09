import { Router } from 'express';
import * as controllers from '../controllers/permits.js';

const router = Router()

router.get('/', controllers.getPermits);
router.get('/:id', controllers.getPermit);
router.post('/', controllers.createPermit);
router.put('/:id', controllers.updatePermit);
router.delete('/:id', controllers.deletePermit);

export default router;