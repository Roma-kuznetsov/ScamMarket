import ProductsService from "../ServiceAll/ProductsService.js";
import UserService from "../ServiceAll/UserServise.js";
import regForm from "../Schem/regForm.js";
import bcrypt from 'bcryptjs';


class UserController {
    //work
    async create(req, res) {
        try {
            const userData = await UserService.create(req.body)
            if(userData.status === 301){
                res.status(userData.status).json({message:"Такой пользователь уже существует"})
            }else{
                res.status(200).json(userData)
            }
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async login(req, res) {
        try {
            const loginData = await UserService.login(req.body)
            res.json(loginData)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }



    async getAll(req, res) {
        try {
            const products = await ProductsService.getAll(req.query)
            return res.json(products)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const products = await ProductsService.getOne(req.params.id)
            return res.json(products)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    //work
    async update(req, res) {
        try {
            const updatedUser = await UserService.update(req.body)
            return res.json(updatedUser)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new UserController()