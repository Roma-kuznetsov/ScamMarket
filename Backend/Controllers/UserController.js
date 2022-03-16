import ProductsService from "../ServiceAll/ProductsService.js";
import UserService from "../ServiceAll/UserServise.js";

class UserController{
    //work
    async create (req,res){
        try{
            const userData = await UserService.create(req.body)
            res.json(userData)
        }catch(e){
            res.status(500).json(e.message)
        }
    }

    async getAll (req,res){
        try{
            const products = await ProductsService.getAll(req.query)
            return res.json(products)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne (req,res){
        try{
            const products = await ProductsService.getOne(req.params.id)
            return res.json(products)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    //work
    async update (req,res){
        try{
            const updatedUser = await UserService.update(req.body)
            return res.json(updatedUser)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new UserController()