import express from 'express';
import { loginAdmin } from '../controller/admin-controller.js';
import { loginUser, signupUser } from '../controller/user-controller.js';
import { createTask, deletesTask, getTask, getTasks, show, updatesTask } from '../controller/task-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';


const router=express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);

router.post('/logina',loginAdmin);

router.get('/tasks',getTasks);
router.get('/stask/:id',getTask);

router.get('/mytask',authenticateToken,show);
router.delete('/deletetask/:id',authenticateToken,deletesTask);
router.put('/update/:id',authenticateToken,updatesTask);
router.post('/task',authenticateToken,createTask);



export default router;