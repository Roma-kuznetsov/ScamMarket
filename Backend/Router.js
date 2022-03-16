import { Router } from "express";
import PostController from "./Controllers/PostController.js";
import ProductsController from "./Controllers/ProductsController.js";
import UserController from "./Controllers/UserController.js";

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
router.put('/products', ProductsController.update)
router.delete('/products/:id', ProductsController.delete)
//userData 
router.post('/createuser',UserController.create)
router.put('/createuser', UserController.update)


export default router;