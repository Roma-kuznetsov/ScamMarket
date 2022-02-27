import { Router } from "express";
import PostController from "./Controllers/PostController.js";
import ProductsController from "./Controllers/ProductsController.js";

const router = new Router()
//post CRUD
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)
//products CRUD
router.post('/products', ProductsController.create)
router.get('/products', ProductsController.getAll)
router.get('/products/:id', ProductsController.getOne)
router.get('/count', ProductsController.getCount)
router.put('/products', ProductsController.update)
router.delete('/products/:id', ProductsController.delete)


export default router;