import ProductsService from "../ServiceAll/ProductsService.js";

class ProductsController{
    //создать продукт
    async create (req,res){
        try{
            const prodItem = await ProductsService.create(req.body,req.files.picture)
            res.json(prodItem)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    // получить всех пользователей ограничение на фронте 
    async getAll (req,res){
        try{
            const products = await ProductsService.getAll(req.query)
            return res.json(products)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    // карточка одного товара по id
    async getOne (req,res){
        try{
            const products = await ProductsService.getOne(req.params.id)
            return res.json(products)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
        // получение избранного
    async getFavorits(req,res){
        try{
            const favorits = await UserService.getFavoritsLoad(req.body)
            res.json(favorits)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete (req,res){
        try{
            const prod = await ProductsService.delete(req.params.id)
            return res.json(prod)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new ProductsController()