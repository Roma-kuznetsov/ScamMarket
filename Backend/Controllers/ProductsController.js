import ProductsService from "../ServiceAll/ProductsService.js";

class ProductsController{
    async create (req,res){
        try{
            const prodItem = await ProductsService.create(req.body,req.files.picture)
            res.json(prodItem)
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
    async update (req,res){
        try{
            const updatedProd = await ProductsService.update(req.body)
            return res.json(updatedProd)
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