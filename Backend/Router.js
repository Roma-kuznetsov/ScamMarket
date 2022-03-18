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
router.put('/products', ProductsController.update)
router.delete('/products/:id', ProductsController.delete)
//userData 
router.post('/createuser', UserController.create)
router.post('/login', UserController.login)
router.get('/autoAuth', authMiddleware,
    async (req, res) => {
        try {
            const user = await regForm.findOne({ _id: req.user.id })
            const token = jwt.sign({ id: user.id }, "bla_bla", { expiresIn: "48h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    cart: user.cart,
                    like: user.like
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
)


export default router;