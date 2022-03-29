import CardProducts from '../Schem/CardProducts.js';
import FileServise from '../FileServise.js';
import regForm from '../Schem/regForm.js';


class ProductsService {
    // создание продукта
    async create(prodItem, picture) {
        const fileName = FileServise.saveFile(picture)
        const createdProd = await CardProducts.create({ ...prodItem, picture: fileName })
        return createdProd;
    }

    // получение всех продуктов 
    async getAll(data) {
        const skiping = data.count * data.page // нужное кол-во пользователей * номер страницы
        const products = await CardProducts.find().skip(skiping - data.count).limit(data.count);
        const count = await CardProducts.find().count()
        console.log(skiping)
        return {
            products,
            count
        }
    }
    // получение одного продукта
    async getOne(id) {
        const products = await CardProducts.findById(id)
        return products
    }

    //получение избранного
    // принимаем id пользователя в query параметре
    async getFavoritsLoad(id) {
        try {
            // получаем пользователя 
            const favoritsUser = await regForm.findById(id)
            //получение count
            const count = favoritsUser.like.length
            //делаем запрос по всем id которые хранятся у этого пользователя в like
            const favorits = await CardProducts.find({ _id: favoritsUser.like })
            // возвращаем все найденые товары и их кол-во
            return {
                resaultCode: 0,
                count,
                favorits
            }
        } catch (e) {
            return {
                message: "id not found",
                resautCode: 1
            }
        }
    }
    //получение cart
    // принимаем id пользователя в query параметре
    async getCartLoad(id) {
        try {
            // получаем пользователя 
            const favoritsUser = await regForm.findById(id)
            //получение count
            const count = favoritsUser.cart.length
            //делаем запрос по всем id которые хранятся у этого пользователя в like
            const cart = await CardProducts.find({ _id: favoritsUser.cart })
            const totalPrice = cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
            // возвращаем все найденые товары и их кол-во
            return {
                totalPrice,
                resaultCode: 0,
                count,
                cart
            }
        } catch (e) {
            console.log(e)
            return {
                message: "id not found {catch}",
                resautCode: 1
            }
        }
    }
}



export default new ProductsService();