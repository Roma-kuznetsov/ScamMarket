import { Router } from "express";
import PostController from "./Controllers/PostController.js";
import ProductsController from "./Controllers/ProductsController.js";
import UserController from "./Controllers/UserController.js";
import authMiddleware from '../Backend/middleware/auth.middleware.js'
import regForm from "./Schem/regForm.js";
import jwt from 'jsonwebtoken';

const router = new Router()
//post CRUD
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)
//products CRUD
router.post('/productstshirt', ProductsController.create)
router.get('/productstshirt', ProductsController.getAll)
router.get('/products/:id', ProductsController.getOne)
router.get('/favorits',ProductsController.getFavorits)
//userData 
router.post('/createuser', UserController.create)
router.post('/login', UserController.login)
router.get('/autoAuth', authMiddleware,UserController.autoAuth)
router.put('/setfav',UserController.setFav)
router.put('/removefav',UserController.removeFav)



export default router;